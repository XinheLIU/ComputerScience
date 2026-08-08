Last updated: 2026-08-08

# Ch 12 · The Depth of Type Systems

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Computational Thinking

## Core Question

What guarantees can a type system provide?

## Soul Insight

Types are compile-time constraints — the stronger the type system, the more errors are caught before the program runs. **Types are documentation that the compiler enforces.** A well-typed program communicates its invariants to every reader, permanently.

## Concepts

- Parametric polymorphism (generics) vs subtype polymorphism — different mechanisms, different tradeoffs
- Structural vs nominal typing: TypeScript vs Java
- Type inference: how the compiler figures out types without annotation
- Algebraic data types (sum types / tagged unions): `Option<T>`, `Result<T, E>`
- The "make illegal states unrepresentable" principle

## Practice Anchor

Compare the same domain model in three type systems:

```typescript
// TypeScript: structural, inferred
type Shape = { kind: 'circle', r: number } | { kind: 'rect', w: number, h: number }
function area(s: Shape): number { ... }  // exhaustiveness checked

// Python: gradual typing
def area(s: Circle | Rect) -> float: ...

// Go: interface-based structural typing
type Shape interface { Area() float64 }
```

What illegal states can each prevent at compile time?

## Status

> Partially covered by language notes. This chapter focuses on the *theory* behind the mechanisms.

## Related Notes

- [Python](../02-programming/01-languages/python) — dynamic typing + type hints
- [Go](../02-programming/01-languages/go) — structural interfaces
- [Java](../02-programming/01-languages/java) — nominal typing
