#!/usr/bin/env node

const prompts = require('prompts');
const kleur = require('kleur');
const fs = require('fs-extra');
const path = require('path');
const { detectPackageManager, detectExistingFiles, copyTemplateFiles } = require('../lib/utils');

async function main() {
  console.log(kleur.cyan('\n✨ Claude Workflow Setup\n'));

  const args = process.argv.slice(2);
  const targetDir = args[0] || '.';
  const targetPath = path.resolve(targetDir);
  
  // Check if we're creating a new project or adding to existing
  const isNewProject = args[0] && !fs.existsSync(targetPath);
  const isEmpty = !isNewProject && fs.readdirSync(targetPath).length === 0;
  
  if (isNewProject || isEmpty) {
    console.log(kleur.gray(`Creating new project in ${targetPath}`));
    fs.ensureDirSync(targetPath);
    process.chdir(targetPath);
  } else {
    console.log(kleur.gray(`Adding Claude workflow to existing project`));
  }

  // Detect package manager and existing files
  const packageManager = detectPackageManager(targetPath);
  const existingFiles = detectExistingFiles(targetPath);
  
  if (packageManager) {
    console.log(kleur.gray(`Detected: ${packageManager} project\n`));
  }

  // Check for existing Claude files
  if (existingFiles.length > 0) {
    console.log(kleur.yellow('⚠️  Found existing Claude files:'));
    existingFiles.forEach(file => console.log(kleur.gray(`  - ${file}`)));
    console.log('');
  }

  // Prompt for what to install
  const response = await prompts([
    {
      type: 'confirm',
      name: 'claudeMd',
      message: 'Add CLAUDE.md for AI guidance?',
      initial: true
    },
    {
      type: 'confirm',
      name: 'devDiary',
      message: 'Add development diary (.dev_diary)?',
      initial: true
    },
    {
      type: 'confirm',
      name: 'agents',
      message: 'Add AI agents for parallel development?',
      initial: true
    }
  ]);

  // Handle existing file conflicts
  const conflicts = [];
  if (response.claudeMd && existingFiles.includes('CLAUDE.md')) {
    const overwrite = await prompts({
      type: 'select',
      name: 'action',
      message: 'CLAUDE.md already exists. What would you like to do?',
      choices: [
        { title: 'Skip', value: 'skip' },
        { title: 'Overwrite', value: 'overwrite' },
        { title: 'Backup existing', value: 'backup' }
      ]
    });
    conflicts.claudeMd = overwrite.action;
  }

  // Copy selected files
  console.log(kleur.gray('\nAdding Claude workflow files...'));
  
  try {
    await copyTemplateFiles({
      targetPath,
      selections: response,
      conflicts,
      isNewProject
    });

    console.log(kleur.green('\n✅ Claude workflow files added successfully!\n'));
    
    // Show next steps
    console.log(kleur.bold('Next steps:'));
    console.log(kleur.gray('1. Review CLAUDE.md and customize for your project'));
    console.log(kleur.gray('2. Start documenting in .dev_diary/'));
    if (response.agents) {
      console.log(kleur.gray('3. Try parallel development with /agents command'));
    }

    // Initialize git for new projects
    if (isNewProject && !fs.existsSync(path.join(targetPath, '.git'))) {
      const initGit = await prompts({
        type: 'confirm',
        name: 'git',
        message: 'Initialize git repository?',
        initial: true
      });

      if (initGit.git) {
        const { execSync } = require('child_process');
        execSync('git init', { cwd: targetPath });
        console.log(kleur.gray('\n📦 Git repository initialized'));
      }
    }

  } catch (error) {
    console.error(kleur.red('\n❌ Error adding files:'), error.message);
    process.exit(1);
  }
}

// Handle Ctrl+C
process.on('SIGINT', () => {
  console.log(kleur.red('\n\nOperation cancelled'));
  process.exit(0);
});

main().catch(err => {
  console.error(kleur.red('Error:'), err);
  process.exit(1);
});