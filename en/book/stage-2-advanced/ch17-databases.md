Last updated: 2026-08-08

# Ch 17 · Data Persistence: Why the Relational Model Is Brilliant

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Systems Thinking

## Core Question

How do we persist complex real-world data reliably?

## Soul Insight

Relational algebra + ACID solved the fundamental problem of *data consistency*. NoSQL is not "better" — it is a conscious set of tradeoffs that trade some consistency guarantees for scalability or flexibility. Understanding what you're giving up is the real skill.

## Concepts

- Relational model: why tables with foreign keys are a mathematical insight, not just a format
- Normalization: eliminate redundancy, enforce consistency — 1NF/2NF/3NF as progressive constraints
- ACID: Atomicity, Consistency, Isolation, Durability — what each means when it fails
- Index internals: B-tree structure and why it makes range queries fast
- ACID vs BASE: what you give up with eventual consistency, and why you'd do it

## Practice Anchor

Design a schema for a social network (users, posts, follows, likes):
1. Normalize to 3NF
2. Identify query patterns and add indexes
3. Write a JOIN-heavy query, profile with `EXPLAIN ANALYZE`
4. Denormalize one table for read performance — measure the tradeoff

## Status

> Database notes with SQL coverage exist. This chapter adds the *why* behind the model.

## Related Notes

- [Database](../03-systems-and-data/03-databases-and-sql/database) — existing DB notes
- [SQL](../03-systems-and-data/03-databases-and-sql/sql) — SQL reference
- [SQL Execution](../03-systems-and-data/03-databases-and-sql/sql-execution) — query execution internals
