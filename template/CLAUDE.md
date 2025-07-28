# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 First Time Setup

**IMPORTANT: If this is a new project created from the claude-template, please help me set it up by:**

1. **Asking me these questions:**
   - What is your project name?
   - What does this project do? (brief description)
   - What are the main development commands? (build, test, dev, lint)
   - What is your project structure?
   - Are there any specific patterns or conventions I should know about?

2. **Then update this file by:**
   - Replacing all `[placeholder]` sections with my actual project information
   - Filling in real commands, paths, and descriptions
   - Adding any project-specific guidance

3. **After setup is complete:**
   - Ask me: "Should I remove the First Time Setup section now that we're done?"
   - Only remove it if I confirm
   - The .dev_diary feature should ALWAYS be kept - it's the main feature of this template

Note: This template includes a development diary system in `.dev_diary/` for tracking implementation details and decisions. This is a core feature and should be preserved.

## Project Overview

[Brief description of what this project does, its main purpose, and key technical components]

## Development Commands

```bash
# Build/compile the project
[build command]

# Run tests
[test command]

# Start development environment
[dev command]

# Lint/format code
[lint command]

# Other important commands
[command] # Description
```

## Project Structure

```
[Show the key directories and what they contain]
project-root/
├── src/          # Main source code
├── tests/        # Test files
├── docs/         # Documentation
└── ...           # Other important directories
```

## Key Development Patterns

### [Pattern Name]
[Explain any non-obvious patterns, conventions, or architectural decisions specific to this project]

## Environment Configuration

### Required Dependencies
- [Dependency 1]: version X.X
- [Dependency 2]: purpose

### Environment Variables
```bash
# Required
VARIABLE_NAME=description_and_example

# Optional
OPTIONAL_VAR=description_and_default
```

## Testing Approach

[How tests are organized and run in this project]

## Common Tasks

### [Task Name]
[Step-by-step instructions for common development tasks]

## Important Notes

[Any critical information about the project that Claude should always keep in mind]

## Development Diary & Architecture Decision Records

### Development Diary Usage

Create a dev diary entry in `.dev_diary/` when:
- Starting a new feature or significant change
- Investigating a bug or unexpected behavior
- Trying multiple approaches to solve a problem
- Encountering errors that require research
- Learning something non-obvious about the codebase
- Documenting day-to-day development progress

The diary helps future development by preserving context and implementation details.

### Architecture Decision Records (ADRs)

Create an ADR in `.dev_diary/adr/` when making decisions that:
- Affect the overall system architecture
- Involve choosing between multiple viable options
- Would be expensive to change later
- Future developers might question

ADRs document the "why" behind important technical decisions. See `.dev_diary/adr/README.md` for details.