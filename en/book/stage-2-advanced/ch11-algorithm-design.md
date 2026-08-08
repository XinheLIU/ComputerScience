Last updated: 2026-08-08

# Ch 11 · Algorithm Design Paradigms

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Computational Thinking

## Core Question

Is there a unified thread connecting divide-and-conquer, dynamic programming, and greedy?

## Soul Insight

All three exploit **subproblem structure** — they differ only in *how*. Identifying the shape of subproblems is the core skill of algorithm design. The paradigm choice follows from the structure, not from pattern-matching to memorized templates.

| Paradigm | Subproblem structure | Combines how |
|----------|---------------------|--------------|
| Divide & conquer | Independent subproblems | Merge results |
| Dynamic programming | Overlapping subproblems + optimal substructure | Memoize & reuse |
| Greedy | Local optimal → global optimal (provable) | Never revisit |

## Concepts

- D&C: recurrence relations, Master Theorem intuition
- DP: recognizing overlapping subproblems, state definition, bottom-up vs top-down
- Greedy: exchange argument proof — why local choices don't need reversal
- When greedy *fails* (knapsack vs fractional knapsack)

## Practice Anchor

Take the interval scheduling problem. Try all three paradigms:
- Greedy works — prove it with an exchange argument
- DP works — but is O(n²), not O(n log n)
- D&C doesn't naturally apply — understand why

Then: apply DP to longest common subsequence. See how the state table encodes the subproblem structure.

## Status

> Placeholder — content to be developed.

## Related Notes

- [Data Structures & Algorithms](../01-foundations/03-programming-foundations/data-structures-and-algorithms)
- [Ch 1 · Algorithms](../stage-1-foundations/ch01-algorithms) — the three meta-tools foundation
