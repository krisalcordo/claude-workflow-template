const fs = require('fs-extra');
const path = require('path');
const kleur = require('kleur');

function detectPackageManager(projectPath) {
  if (fs.existsSync(path.join(projectPath, 'package-lock.json'))) {
    return 'npm';
  } else if (fs.existsSync(path.join(projectPath, 'yarn.lock'))) {
    return 'yarn';
  } else if (fs.existsSync(path.join(projectPath, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  } else if (fs.existsSync(path.join(projectPath, 'package.json'))) {
    return 'npm'; // default to npm if package.json exists
  }
  return null;
}

function detectExistingFiles(projectPath) {
  const filesToCheck = [
    'CLAUDE.md',
    '.dev_diary',
    '.claude/agents'
  ];
  
  return filesToCheck.filter(file => 
    fs.existsSync(path.join(projectPath, file))
  );
}

async function copyTemplateFiles({ targetPath, selections, conflicts, isNewProject }) {
  const templateDir = path.join(__dirname, '..', 'template');
  
  // Copy CLAUDE.md
  if (selections.claudeMd) {
    const claudePath = path.join(targetPath, 'CLAUDE.md');
    const shouldCopy = !conflicts.claudeMd || conflicts.claudeMd !== 'skip';
    
    if (shouldCopy) {
      if (conflicts.claudeMd === 'backup' && fs.existsSync(claudePath)) {
        fs.renameSync(claudePath, claudePath + '.backup');
        console.log(kleur.gray('  → Backed up existing CLAUDE.md'));
      }
      
      fs.copySync(
        path.join(templateDir, 'CLAUDE.md'),
        claudePath
      );
      console.log(kleur.green('  ✓ Added CLAUDE.md'));
    } else {
      console.log(kleur.gray('  → Skipped CLAUDE.md'));
    }
  }
  
  // Copy dev diary
  if (selections.devDiary) {
    const diaryPath = path.join(targetPath, '.dev_diary');
    
    if (!fs.existsSync(diaryPath)) {
      fs.copySync(
        path.join(templateDir, '.dev_diary'),
        diaryPath
      );
      console.log(kleur.green('  ✓ Added .dev_diary/'));
    } else {
      console.log(kleur.gray('  → .dev_diary/ already exists, skipped'));
    }
  }
  
  // Copy agents
  if (selections.agents) {
    const agentsPath = path.join(targetPath, '.claude', 'agents');
    
    if (!fs.existsSync(agentsPath)) {
      fs.ensureDirSync(path.join(targetPath, '.claude'));
      fs.copySync(
        path.join(templateDir, '.claude', 'agents'),
        agentsPath
      );
      console.log(kleur.green('  ✓ Added .claude/agents/'));
    } else {
      console.log(kleur.gray('  → .claude/agents/ already exists, skipped'));
    }
  }
  
  // For new projects, also copy .gitignore if it doesn't exist
  if (isNewProject && !fs.existsSync(path.join(targetPath, '.gitignore'))) {
    const gitignorePath = path.join(templateDir, '.gitignore');
    if (fs.existsSync(gitignorePath)) {
      fs.copySync(gitignorePath, path.join(targetPath, '.gitignore'));
      console.log(kleur.green('  ✓ Added .gitignore'));
    }
  }
}

module.exports = {
  detectPackageManager,
  detectExistingFiles,
  copyTemplateFiles
};