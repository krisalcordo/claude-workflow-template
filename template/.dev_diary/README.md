# Development Diary

This directory contains documentation of significant development work, investigations, and decisions made during the project.

## Purpose

- Track the evolution of features and fixes
- Document investigation processes and findings  
- Record decisions and their rationale
- Create searchable history for debugging
- Preserve knowledge about what was tried (including what didn't work)

## Dev Diary vs Architecture Decision Records

This directory contains two types of documentation:

### Development Diary (`.dev_diary/*.md`)
- Day-to-day development narrative
- Implementation details and debugging sessions
- Feature development progress
- Temporary problems and their solutions
- "What I did and how I did it"

### Architecture Decision Records (`.dev_diary/adr/*.md`)
- Long-lasting architectural decisions
- Technology and pattern choices
- Trade-offs and their rationale
- Decisions that affect the whole system
- "Why we chose X over Y"

Use the dev diary for development journey; use ADRs for architectural choices.

## Usage

1. Create a new diary entry when starting significant work
2. Use the template.md as a starting point
3. Name files as: `YYYY-MM-DD_brief_description.md`
4. Update entries as work progresses
5. Keep entries factual and searchable
6. Add relevant tags for easy discovery

## When to Create an Entry

- Feature implementations
- Bug investigations (especially complex ones)
- Performance optimizations  
- Architectural changes
- Failed attempts that provide learning value

## Tips

- Include exact error messages for searchability
- Document "why" not just "what"
- Link related entries
- Keep a balance - not every change needs an entry

## Tagging System

Use hashtags to categorize entries for easy searching:

### Common Tags
- **Type**: #feature #bugfix #hotfix #refactor #performance #security #investigation
- **Area**: #frontend #backend #database #api #infrastructure #testing #documentation  
- **Tech**: #react #nodejs #python #docker #kubernetes (project-specific)
- **Status**: #solved #workaround #blocked #needsreview
- **Difficulty**: #complex #edgecase #dataissue

### Searching
```bash
# Find all performance-related entries
grep -l "#performance" .dev_diary/*.md

# Find all database investigations  
grep -l "#database.*#investigation" .dev_diary/*.md

# Find all blocked items
grep -l "#blocked" .dev_diary/*.md
```