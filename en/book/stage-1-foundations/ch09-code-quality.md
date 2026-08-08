Last updated: 2026-08-08

# Ch 9 · Code Quality & Testability

> **Stage**: 第一阶 · Foundations (L5 → L4) | **Pillar**: Engineering Practice

## Core Question

What is good code? Why does testability matter?

## Soul Insight

Readability is written for your future self. Testability forces good interface design. Both trace to the same root: **separation of concerns**. Code that is hard to test is usually hard to understand — and usually has too many responsibilities.

## Concepts

- Naming: a name is a compression of intent — longer and precise beats short and vague
- Function design: one job, explicit inputs/outputs, no hidden state
- Unit testing: isolate behavior, verify contracts, not implementations
- TDD mindset: writing the test first forces you to define the interface before the implementation
- Code smells: long functions, deep nesting, flag parameters, global state

## Practice Anchor

Take a 50-line function that does too much. Refactor it:
1. Extract until each function has one job
2. Name everything precisely
3. Write unit tests for each piece
4. Compare: is the refactored version easier to test? Easier to read?

## Status

> Existing notes cover testing mechanics. This chapter focuses on the *why* — the design philosophy behind testable code.

## Related Notes

- [Code Testing](../04-design-and-architecture/01-design-foundations/code-testing) — testing techniques
- [Debugging and Testing](../02-programming/02-quality-and-correctness/debugging-and-testing) — debugging notes
- [Design Principles](../04-design-and-architecture/01-design-foundations/design-principles) — SOLID, etc.
