# CLAUDE_WORKFLOW_TEMPLATE.md

This template provides a comprehensive structure for setting up AI-assisted development workflows with Claude Code. It combines project guidance (CLAUDE.md), development documentation practices (dev_diary), and AI agent orchestration patterns.

## Core Components

### 1. CLAUDE.md - Project Guidance File
```markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

[Project description with architecture components]
- **Component**: Technology stack and purpose
- **Integration points**: How components connect
- **MVP focus**: Core functionality description

## Development Commands

### [Component Name]
```bash
# Environment setup
command start    # Start development environment
command migrate  # Run database migrations
command test     # Run test suite
command lint     # Run linting checks
```

## Architecture Overview

### [Key Patterns]
[Description of architectural decisions and patterns used]

### [Authentication/Security]
[Step-by-step flows and security considerations]

### [Data Flow]
[API structure, state management, data persistence]

## Key Development Patterns

### [Pattern Category]
[When and how to use specific patterns in the codebase]

## Environment Configuration

### [Environment Variables]
- `VAR_NAME`: Purpose and acceptable values
- `SECRET_VAR`: Security considerations

## Development Practices

### Development Diary
All significant development work should be documented in the `.dev_diary` directory:

- **Location**: `.dev_diary/`
- **Naming**: `YYYY-MM-DD_work_description.md`
- **Template**: Use `.dev_diary/template.md` as starting point

The diary tracks:
- User requests (exact prompts)
- Investigation findings
- Implementation attempts (including failures)
- Decision points and reasoning
- Test results and outcomes

This creates a searchable knowledge base for debugging and understanding past decisions.

### Why Document Everything?
- Provides context for future debugging
- Helps understand why certain approaches were taken
- Documents what didn't work and why
- Creates institutional knowledge
- Tracks the evolution of features
```

### 2. Development Diary Structure
```markdown
## .dev_diary/template.md

# [Feature Name]

**Date Started**: YYYY-MM-DD  
**Status**: [Planning | In Progress | Testing | Complete | Blocked]  
**Branch**: `branch-name`  
**Related Issues**: #xxx (if applicable)

## Problem Statement
[Clear description of what needs to be solved or implemented]

## User Requests

### Initial Request
**Time**: HH:MM  
**Prompt**: "[Exact user prompt]"

### Follow-up Requests
[Document any additional user guidance]

## Investigation

### Current State Analysis
[What was discovered about the existing code]

### Research
[Any external resources consulted, similar problems researched]

### Proposed Solutions
1. [Option 1]
2. [Option 2]
3. [Selected approach and why]

## Implementation Progress

### Session 1: [Date] [Time]
#### What Was Done
- [ ] Step 1
- [ ] Step 2

#### Code Changes
```language
// Before
[code snippet]

// After
[code snippet]
```

#### Issues Encountered
[Any problems that came up]

#### Solutions Applied
[How problems were resolved]

## Testing

### Test Plan
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing
- [ ] Edge cases

### Test Results
[Document outcomes]

## Results

### Final Outcome
[What was achieved]

### Performance Impact
[Any metrics if relevant]

### User Feedback
[Response from user if available]

## Lessons Learned
1. [Key takeaway 1]
2. [Key takeaway 2]
3. [What would you do differently]

## Future Improvements
[Any ideas for future enhancements]

## Related Documentation
- [Link to technical documentation]
- [Link to PR if applicable]
- [Link to related diary entries]
```

### 3. AI Agent Workflow Patterns

```markdown
## AI Agent Patterns (Optional Advanced Section)

### Agent Delegation Structure
When working with complex multi-component projects, consider using specialized AI agents:

#### Backend Agent Pattern
- **Trigger**: Laravel/PHP backend tasks
- **Scope**: Controllers, models, migrations, API endpoints
- **Commands**: `ddev artisan`, database operations
- **Context**: Backend.md documentation

#### Frontend Agent Pattern
- **Trigger**: React/Vue/Angular frontend tasks
- **Scope**: Components, state management, styling
- **Commands**: `npm run dev`, build processes
- **Context**: Frontend.md documentation

#### Mobile Agent Pattern
- **Trigger**: React Native/Flutter mobile tasks
- **Scope**: Platform-specific code, native integrations
- **Commands**: Platform build commands
- **Context**: App.md documentation

#### Architect Agent Pattern
- **Trigger**: Cross-component features, system design
- **Scope**: Breaking down complex features into component tasks
- **Output**: Task delegation to specific agents

### Agent Coordination Example
```yaml
Feature: "Add user ratings for food trucks"
Architect Analysis:
  - Backend: Create ratings table, API endpoints
  - Frontend: Rating component, display logic
  - Mobile: Native rating UI, offline support
  
Task Delegation:
  1. Backend Agent: Create migration and model
  2. Backend Agent: Implement CRUD endpoints
  3. Frontend Agent: Create rating component
  4. Mobile Agent: Implement native rating UI
  5. All Agents: Integration testing
```

### When to Use Agent Patterns
- Projects with 3+ distinct components
- Features requiring coordinated changes across components
- Complex architectural decisions
- When specialized knowledge is needed per component
```

### 4. Project Structure Patterns

```markdown
## Recommended Project Structure

### Monorepo Pattern
```
project-root/
├── CLAUDE.md                 # Main project guidance
├── .dev_diary/              # Development documentation
│   ├── template.md          # Diary template
│   └── YYYY-MM-DD_*.md      # Diary entries
├── backend/                 # Backend component
│   └── backend.md          # Backend-specific guidance
├── frontend/                # Frontend component
│   └── frontend.md         # Frontend-specific guidance
├── mobile/                  # Mobile component
│   └── app.md              # Mobile-specific guidance
└── shared/                  # Shared code/types
    └── shared.md           # Shared code guidance
```

### Multi-repo Pattern
```
organization/
├── project-backend/
│   ├── CLAUDE.md
│   └── .dev_diary/
├── project-frontend/
│   ├── CLAUDE.md
│   └── .dev_diary/
└── project-mobile/
    ├── CLAUDE.md
    └── .dev_diary/
```
```

### 5. Workflow Best Practices

```markdown
## AI Development Workflow Best Practices

### 1. Initial Setup
- Create CLAUDE.md with project overview
- Set up .dev_diary/ directory with template
- Document key architectural decisions
- List all essential commands

### 2. Feature Development Flow
1. User request → Create diary entry
2. Investigation → Document findings
3. Planning → Record proposed solutions
4. Implementation → Track progress and issues
5. Testing → Document test results
6. Review → Record lessons learned

### 3. Documentation Maintenance
- Update CLAUDE.md when:
  - Adding new features
  - Changing architecture
  - Discovering important patterns
  - Adding new commands
  
- Create diary entries for:
  - All feature implementations
  - Bug investigations
  - Performance optimizations
  - Architectural changes

### 4. Knowledge Preservation
- Keep diary entries factual and searchable
- Include error messages and solutions
- Document dead ends and why they failed
- Link related diary entries

### 5. Command Documentation
```bash
# Always document commands with their purpose
npm run dev      # Start development server with hot reload
npm run test     # Run unit tests with coverage
npm run lint     # Check code style and common errors
npm run build    # Create production build
```

### 6. Environment Documentation
- Document all required environment variables
- Include example values (not secrets)
- Explain the purpose of each variable
- Note any dependencies between variables

### 7. Error Handling Patterns
Document common errors and their solutions:
```markdown
## Common Issues

### Issue: [Error message]
**Cause**: [Why it happens]
**Solution**: [Step-by-step fix]
**Prevention**: [How to avoid]
```
```

### 6. Template Customization Guide

```markdown
## Customization Guidelines

### For Simple Projects
- Use only CLAUDE.md with basic sections
- Skip agent patterns
- Minimal dev_diary usage

### For Medium Projects
- Full CLAUDE.md implementation
- Active dev_diary usage
- Component-specific documentation

### For Complex Projects
- Complete CLAUDE.md with all sections
- Comprehensive dev_diary entries
- Agent delegation patterns
- Component-specific .md files
- Shared code documentation

### Industry-Specific Adaptations

#### SaaS Applications
- Focus on multi-tenancy patterns
- Document API versioning
- Include deployment workflows

#### Mobile Applications
- Platform-specific sections
- Deep linking documentation
- Offline capability patterns

#### Data Science Projects
- Notebook documentation
- Data pipeline descriptions
- Model versioning practices

#### DevOps/Infrastructure
- Infrastructure as Code patterns
- CI/CD pipeline documentation
- Security compliance notes
```

## Implementation Checklist

- [ ] Create CLAUDE.md with project overview
- [ ] Set up .dev_diary/ directory
- [ ] Add template.md to .dev_diary/
- [ ] Document all development commands
- [ ] Create component-specific .md files (if needed)
- [ ] Add environment configuration docs
- [ ] Include architecture diagrams (if helpful)
- [ ] Set up agent patterns (if applicable)
- [ ] Test that Claude can follow the documentation
- [ ] Commit initial documentation structure

## Maintenance Schedule

- **Daily**: Update dev_diary for active work
- **Weekly**: Review and update CLAUDE.md
- **Sprint/Iteration**: Archive completed diary entries
- **Quarterly**: Major documentation review
- **Annually**: Archive old diary entries

Remember: Good documentation compounds over time. What seems obvious today will be invaluable context in six months!
