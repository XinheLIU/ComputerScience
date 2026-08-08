Last updated: 2026-08-08

# Ch 18 · Architecture Patterns: The Idea of Separation of Concerns

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Engineering Practice

## Core Question

How do you organize complex system code?

## Soul Insight

MVC, DDD, and microservices are not a collection of design patterns — they are the *same idea* (separation of concerns) applied at different scales. The pattern always asks: which decisions belong together, and which should be isolated from each other?

## Concepts

- Layered architecture: dependency direction as a constraint (outer depends on inner, never reversed)
- MVC: separating data model, display, and interaction handling
- Domain-Driven Design essentials: bounded contexts, aggregates, ubiquitous language
- Service boundaries: cohesion within, loose coupling between
- The dependency inversion principle: depend on abstractions, not concretions

## Practice Anchor

Refactor the same feature in three architectural styles:
1. **Flat script**: everything in one file — understand the pain
2. **MVC**: separate model/view/controller — what becomes easier?
3. **Layered + DI**: domain logic has no framework imports — what can you test without the web framework?

## Status

> Architecture and design pattern notes exist. This chapter synthesizes the *unifying concept*.

## Related Notes

- [Software Design](../04-design-and-architecture/01-design-foundations/software-design) — design overview
- [Design Patterns — Overview](../04-design-and-architecture/02-design-patterns/design-patterns-overview)
- [Software Architecture](../04-design-and-architecture/03-software-architecture/software-architecture)
- [Architecture Styles](../04-design-and-architecture/03-software-architecture/architecture-styles)
