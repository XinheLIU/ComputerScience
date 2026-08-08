Last updated: 2026-08-08

# Ch 27 · Performance Analysis & System Tuning

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: Systems Thinking

## Core Question

The system is slow. How do you find the root cause?

## Soul Insight

Performance analysis is the scientific method applied to systems. **Measure first, hypothesize second, verify third.** Optimization without measurement is guessing. The most dangerous engineers are those who optimize the wrong bottleneck confidently.

## Concepts

- Profiling: CPU profiling (flame graphs), memory profiling, I/O profiling — finding the actual bottleneck
- Little's Law: L = λW — throughput, latency, and concurrency are mathematically linked
- The memory hierarchy: registers → L1/L2/L3 cache → RAM → disk → network — the 10x cost steps
- CPU-bound vs I/O-bound: different bottlenecks, different solutions
- Caching: when it helps (hot working set), when it harms (cache invalidation complexity)
- Latency vs throughput tradeoffs: batching, pipelining, async

## Practice Anchor

Profile a real service with a synthetic bottleneck:
1. Add a CPU-bound bottleneck (e.g., SHA256 in a hot path) — find it with `py-spy` / `perf`
2. Add an I/O-bound bottleneck (synchronous DB call in a loop) — find it with traces
3. For each: distinguish the symptom from the root cause
4. Fix and verify: the fix should match the bottleneck type

## Status

> Placeholder — content to be developed.

## Related Notes

- [Linux Debugging](../03-systems-and-data/01-operating-systems-and-linux/linux-debugging) — debugging tools
- [Ch 26 · Distributed Systems](ch26-distributed-systems) — distributed performance considerations
