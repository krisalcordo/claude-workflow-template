# Claude Workflow Template

A minimal template for documenting projects for AI-assisted development with Claude.

## Core Files

### CLAUDE.md
```markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
[What this project does and key components]

## Development Commands
```bash
# Key commands Claude should know
build    # How to build the project
test     # How to run tests
dev      # How to start development
lint     # How to check code quality
```

## Architecture
[How the project is structured - focus on non-obvious patterns]

## Key Patterns
[Project-specific patterns that aren't immediately discoverable]

## Environment Setup
[Required configuration and dependencies]
```

### Development Diary (Optional)
Track complex work in `.dev_diary/YYYY-MM-DD_description.md`:

```markdown
# [Task Name]

## Request
[What was asked]

## Approach
[How you solved it]

## Issues & Solutions
[Problems encountered and fixes]

## Result
[What was delivered]
```

## Usage

1. Copy this template to your project
2. Fill in project-specific details
3. Remove sections that don't apply
4. Add sections as needed

## When to Use What

**Just CLAUDE.md**: Most projects
**Add dev_diary**: Long-term projects with complex history
**Add more structure**: Multi-team or enterprise projects

Remember: Start simple, expand as needed.