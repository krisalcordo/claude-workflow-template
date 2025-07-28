# Claude Template

A powerful template for AI-assisted development with Claude Code, featuring built-in development diary and Architecture Decision Records (ADRs) for maintaining project knowledge.

## Quick Start

### Using degit (Recommended)
```bash
npx degit krisalcordo/claude-template/template my-project
cd my-project
```

### Using git clone
```bash
git clone https://github.com/krisalcordo/claude-template.git
cp -r claude-template/template/* my-project/
cd my-project
```

### Manual Setup
1. Copy the `template` directory contents to your project
2. Open the project with Claude Code
3. Claude will guide you through the interactive setup process

## What's Included

```
template/
├── CLAUDE.md              # Main guidance file for Claude with interactive setup
└── .dev_diary/           # Development documentation system
    ├── README.md         # How to use the diary
    ├── template.md       # Entry template
    └── adr/              # Architecture Decision Records
        └── README.md     # ADR guide and template
```

## Features

### 🤖 Interactive Setup
When you first use the template, Claude will:
- Ask about your project (name, purpose, commands)
- Help personalize all template sections
- Confirm before removing any template content
- Set up your project-specific documentation

### 📓 Development Diary
Track your development journey with:
- Structured templates for documenting work
- Investigation processes and failed attempts
- Implementation details and context
- Lessons learned for future reference

### 🏛️ Architecture Decision Records (ADRs)
Document important decisions with:
- Structured format for architectural choices
- Context, consequences, and alternatives
- Historical record of "why" decisions were made
- Template for consistent documentation

## How It Works

1. **Copy the template** to your project using degit or git clone
2. **Open with Claude Code** - Claude will notice the setup instructions
3. **Answer Claude's questions** about your project
4. **Start developing** with AI assistance and proper documentation

The template creates a sustainable workflow where both you and Claude can understand the project's evolution over time.

## Best Practices

1. **Start Simple**: Only include what's actually needed
2. **Be Specific**: Generic advice doesn't help Claude
3. **Update Regularly**: Keep CLAUDE.md current as the project evolves
4. **Document Patterns**: Focus on non-obvious project conventions
5. **Include Examples**: Real command examples work better than descriptions

## Why Use This Template?

- **Better AI Assistance**: Claude understands your project structure and conventions
- **Knowledge Preservation**: Development decisions and context are never lost
- **Team Collaboration**: New developers (human or AI) can quickly understand the codebase
- **Reduced Context Switching**: All project knowledge in one place
- **Future-Proof**: Works with any programming language or framework

## Contributing

Feel free to suggest improvements to this template structure.

## License

MIT