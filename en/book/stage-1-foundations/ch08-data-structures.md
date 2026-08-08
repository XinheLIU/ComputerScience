Last updated: 2026-08-08

# Ch 8 · The Philosophy of Data Structure Choice

> **Stage**: 第一阶 · Foundations (L5 → L4) | **Pillar**: Systems Thinking

## Core Question

Which data structure should I use?

## Soul Insight

The *shape* of data determines the shape of algorithms. Every data structure is a set of guarantees and a set of costs — it is intuition, not memorization. Once you internalize what each structure promises, the choice becomes obvious.

## Concepts

| Structure | Guarantees | Cost |
|-----------|-----------|------|
| Array | O(1) random access | O(n) insert/delete |
| Linked list | O(1) insert at head | O(n) access by index |
| Hash table | O(1) average lookup | No ordering; collisions |
| BST / balanced tree | O(log n) everything | Pointer overhead |
| Heap | O(1) find-min/max | O(log n) insert |
| Graph | Arbitrary relationships | Varies by representation |

## Practice Anchor

Word frequency count — same problem, different structures, measured:

```python
# 1. Sorted list: O(n log n) per lookup via binary search
# 2. Hash map: O(1) average
# 3. Trie: O(k) where k = word length — beats hash map for prefix queries
```

Build all three. Benchmark on 100k-word corpus. Explain the numbers.

## Status

> Existing notes have detailed algorithm content. This chapter reframes *selection philosophy* not mechanics.

## Related Notes

- [Data Structures & Algorithms](../01-foundations/03-programming-foundations/data-structures-and-algorithms) — detailed algorithm notes
