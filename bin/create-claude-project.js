#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, '..', 'template');
const targetDir = process.cwd();

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  
  const stats = fs.statSync(src);
  
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    fs.readdirSync(src).forEach(file => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Only run if called directly (not during npm install in the template itself)
if (process.env.npm_lifecycle_event === 'postinstall' && 
    !targetDir.includes('claude-workflow-template')) {
  
  console.log('Setting up Claude workflow files...');
  
  // Copy template files
  copyRecursive(templateDir, targetDir);
  
  console.log('✅ Claude workflow files have been added to your project!');
  console.log('\nNext steps:');
  console.log('1. Review and customize CLAUDE.md for your project');
  console.log('2. Start using .dev_diary/ to track development');
  console.log('3. Explore .claude/agents/ for parallel development workflows');
}