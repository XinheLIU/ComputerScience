Last updated: 2026-08-08

# Ch 16 · Concurrency & Synchronization

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Systems Thinking

## Core Question

Why is shared state so hard?

## Soul Insight

The fundamental difficulty of concurrency is **non-deterministic execution order**. Every concurrency bug traces back to this single root. Every synchronization primitive — locks, semaphores, channels, atomic operations — is a way to constrain ordering. The question is always: "which orderings are safe?"

## Concepts

- Race conditions: why interleaving matters
- Mutex: mutual exclusion, the simplest ordering constraint
- Deadlock: four conditions (mutual exclusion, hold-and-wait, no preemption, circular wait)
- Lock-free data structures: compare-and-swap as a primitive
- CSP (Go's channels): don't communicate by sharing memory; share memory by communicating
- Actor model: Erlang/Akka approach — no shared state, only message passing

## Practice Anchor

Classic bank account race:

```python
# Reproduce a race condition: two threads increment balance 1000 times each
# Expected: 2000. Actual: varies. Measure the variance.
# Fix 1: threading.Lock() — prove it works
# Fix 2: Go channels equivalent — compare design implications
```

Then: create a deadlock with two mutexes. Identify which of the four conditions to break.

## Status

> Placeholder — content to be developed.

## Related Notes

- [Distributed System](../04-design-and-architecture/04-distributed-systems/distributed-system) — distributed concurrency
- [Ch 26 · Distributed Systems](../stage-3-expert/ch26-distributed-systems) — consensus at scale
