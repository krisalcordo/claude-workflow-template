# Architecture Decision Records

This directory contains Architecture Decision Records (ADRs) for the project.

## What are ADRs?

ADRs are short documents that capture important architectural decisions made during the development of a project. Each ADR describes a single decision, the context in which it was made, and its consequences.

## When to write an ADR

Write an ADR when you make a decision that:
- Affects the overall structure of the system
- Would be expensive to change later
- Involves choosing between multiple viable options
- Future developers (including yourself) might question

Examples:
- Choosing a framework or major library
- Deciding on a data storage approach
- Selecting an authentication strategy
- Establishing coding patterns or conventions
- Making performance vs. simplicity trade-offs

## ADR vs Dev Diary

- **Dev Diary**: Day-to-day development narrative, debugging sessions, implementation details
- **ADRs**: Long-lasting architectural decisions and their rationale

## How to write an ADR

1. Copy `template.md` to a new file named `NNNN-title-with-dashes.md`
   - NNNN is a 4-digit number (0001, 0002, etc.)
   - Numbers are never reused, even if an ADR is deprecated

2. Fill in the sections:
   - **Status**: proposed, accepted, deprecated, superseded
   - **Context**: What is the issue that we're seeing that is motivating this decision?
   - **Decision**: What is the change that we're proposing and/or doing?
   - **Consequences**: What becomes easier or more difficult to do because of this change?

3. Keep it short - 1-2 pages maximum

## Updating ADRs

- ADRs are immutable once accepted
- To change a decision, create a new ADR that supersedes the old one
- Update the old ADR's status to "Superseded by ADR-NNNN"

## Examples

See `0001-record-architecture-decisions.md` for the first ADR explaining why we use ADRs.