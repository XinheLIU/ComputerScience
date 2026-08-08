Last updated: 2026-08-08

# Ch 28 · System Design Methodology

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: Engineering Practice

## Core Question

From requirements to architecture — how does an engineer make decisions?

## Soul Insight

System design is not about finding the "right answer" — it is about **making explicit tradeoffs under constraints**. The goal is not a beautiful architecture; it is one whose tradeoffs are understood, documented, and appropriate for the context. Future engineers should be able to read why, not just what.

## Concepts

- Requirements decomposition: functional vs non-functional, what drives architecture
- Capacity estimation: back-of-envelope math as a decision tool
- Architecture selection framework: start with the simplest thing that could work, then identify forcing functions to evolve
- API design: contracts are load-bearing; changing them is expensive
- Evolutionary design: design for change, not for the ultimate solution
- Documentation of tradeoffs: ADRs (Architecture Decision Records)

## Practice Anchor

Complete system design for a URL shortener:
1. Requirements: read/write ratio, scale (URLs/day), latency targets
2. Capacity estimate: storage, bandwidth, QPS
3. Data model: how is a short code mapped to a URL?
4. Architecture: single DB → read replicas → caching tier (driven by bottleneck analysis)
5. Write an ADR for the most significant tradeoff made

## Status

> System design notes exist. This chapter adds the *methodology* — how to think, not just examples.

## Related Notes

- [System Design](../04-design-and-architecture/04-distributed-systems/system-design) — existing system design notes
- [Architecture Styles](../04-design-and-architecture/03-software-architecture/architecture-styles)
- [Ch 26 · Distributed Systems](ch26-distributed-systems)
