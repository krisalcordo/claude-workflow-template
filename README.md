# Claude Template

A minimal, generic template for setting up AI-assisted development workflows with Claude Code.

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
2. Edit `CLAUDE.md` with your project-specific information
3. Remove any sections that don't apply

## What's Included

```
template/
├── CLAUDE.md              # Main guidance file for Claude
└── .dev_diary/           # Development documentation
    ├── README.md         # How to use the diary
    └── template.md       # Entry template
```

## CLAUDE.md Sections

- **Project Overview**: High-level description and purpose
- **Development Commands**: Essential commands Claude needs
- **Project Structure**: Key directories and organization  
- **Key Development Patterns**: Non-obvious conventions
- **Environment Configuration**: Dependencies and setup
- **Testing Approach**: How tests work in your project
- **Common Tasks**: Step-by-step guides
- **Important Notes**: Critical information

## Development Diary

The `.dev_diary` directory helps track:
- Complex implementations
- Investigation processes
- Decisions and rationale
- What didn't work and why

Use it for significant work that future developers (or Claude) might need to understand.

## Best Practices

1. **Start Simple**: Only include what's actually needed
2. **Be Specific**: Generic advice doesn't help Claude
3. **Update Regularly**: Keep CLAUDE.md current as the project evolves
4. **Document Patterns**: Focus on non-obvious project conventions
5. **Include Examples**: Real command examples work better than descriptions

## When to Use Each Part

- **Just CLAUDE.md**: Most projects (start here)
- **Add dev_diary**: Long-term projects with complex history
- **Expand sections**: As project complexity grows

## Contributing

Feel free to suggest improvements to this template structure.

## License

MIT