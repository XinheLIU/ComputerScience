Last updated: 2026-08-08

# Ch 21 · Computational Complexity & the Limits of Computation

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: Computational Thinking

## Core Question

What problems can computers solve? How hard are the ones they can?

## Soul Insight

P/NP is not an academic question — it is the engineering intuition "does this problem have an efficient algorithm?" The halting problem is computation's fundamental limit: some questions cannot be answered by any algorithm, ever. Knowing these boundaries prevents wasted effort and guides practical choices.

## Concepts

- Complexity classes: P (efficiently solvable), NP (efficiently verifiable), co-NP
- NP-completeness: reduction as a proof technique; why 3-SAT is a Rosetta Stone
- Practical engineering intuition: recognizing NP-hard problems in disguise (scheduling, packing, routing)
- Approximation algorithms: when exact is infeasible, how close can we get?
- The halting problem: proof by contradiction; Rice's theorem generalization
- Undecidability in practice: why static analysis is necessarily incomplete

## Practice Anchor

Identify NP-hard problems hiding in engineering work:
- Job scheduling with dependencies → topological sort (P) vs weighted job scheduling (NP-hard)
- Feature flag combinations to test → exponential → use pairwise testing heuristic
- Microservice deployment ordering → topological sort (P) if acyclic; NP-hard with cycles

For each: why is the naive brute-force unacceptable? What approximation or heuristic is used?

## Status

> Placeholder — content to be developed.

## Related Notes

- [Ch 1 · Algorithms](../stage-1-foundations/ch01-algorithms) — algorithmic foundations
- [Ch 11 · Algorithm Design](../stage-2-advanced/ch11-algorithm-design) — design paradigms prerequisite
