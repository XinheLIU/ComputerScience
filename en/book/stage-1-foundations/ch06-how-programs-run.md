Last updated: 2026-08-08

# Ch 6 · How Programs Run

> **Stage**: 第一阶 · Foundations (L5 → L4) | **Pillar**: Systems Thinking

## Core Question

How does the code I write become something a machine executes?

## Soul Insight

Source code to execution is a translation chain — each layer lowers the abstraction level. There is no magic at any step. Understanding this chain eliminates cargo-cult programming: you know *why* segfaults happen, why garbage collectors exist, why JIT compilation is faster than interpretation.

## Concepts

- Compilation vs interpretation vs JIT — tradeoffs, not categories
- Linking: static vs dynamic, symbol resolution
- Memory layout: code segment, stack, heap, BSS
- The call stack: frames, return addresses, why stack overflow happens
- Runtime: what the language runtime provides (GC, exception handling, type info)

## Practice Anchor

Use C to make memory concrete:
```c
int global = 1;          // BSS / data segment
void f() {
    int local = 2;       // stack
    int *heap = malloc(4); // heap
}
```
Then: write a C program that segfaults. Understand exactly *which* memory rule it violated.

## Status

> Partially covered by existing notes on computer systems.

## Related Notes

- [Computer Systems](../01-foundations/02-computing-foundations/computer-systems) — existing systems overview
- [Software](../01-foundations/02-computing-foundations/software) — software concepts
- [Operating Systems](ch07-operating-systems) → Ch 7 extends this with OS-level abstractions
