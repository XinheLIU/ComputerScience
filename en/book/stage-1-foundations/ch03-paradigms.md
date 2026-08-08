Last updated: 2026-08-08

# Ch 3 · Paradigms & Language Design

> **Stage**: 第一阶 · Foundations (L5 → L4) | **Pillar**: Computational Thinking

## Core Question

Why are there so many programming languages? What are their essential differences?

## Soul Insight

A language is a paradigm made concrete. A paradigm is a worldview — λ-calculus gives us functional, stateful machines give us imperative, message-passing gives us OOP, relations give us logic programming. Learning a new paradigm changes how you see problems, not just what syntax you write.

## Concepts

- The four major paradigms: imperative, functional, object-oriented, logic/declarative
- λ-calculus as the theoretical root of functional languages
- State as the root of imperative programming — and why shared mutable state is dangerous
- The same problem from four angles: iteration vs recursion vs message vs constraint

## Practice Anchor

Solve the same problem (e.g., filter + transform a list) in four styles using Python:

```python
# Imperative
result = []
for x in data:
    if pred(x):
        result.append(f(x))

# Functional
result = list(map(f, filter(pred, data)))

# OOP (encapsulate state)
class Pipeline:
    ...

# Declarative (SQL-like)
result = [f(x) for x in data if pred(x)]
```

## Status

> Partially covered by existing notes. See related notes below.

## Related Notes

- [Programming Paradigms](../04-design-and-architecture/01-design-foundations/programming-paradigms) — existing detailed notes
- [Object-Oriented Programming](../01-foundations/03-programming-foundations/object-oriented-programming) — OOP deep dive
- [Python](../02-programming/01-languages/python) — multi-paradigm language example
