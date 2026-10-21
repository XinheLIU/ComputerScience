---
id: database
locale: en
title: "Database"
status: published
created: 2026-10-17
updated: 2026-10-17
---

# Data Persistence: Why Relational Is Brilliant

Last updated: 2026-10-17

## Data Persistence: Why Relational Is Brilliant

### Core Question

How do we persist complex real-world data reliably?

### Soul Insight

Relational algebra + ACID solved the fundamental problem of *data consistency*. NoSQL is not "better" — it is a conscious set of tradeoffs that trade some consistency guarantees for scalability or flexibility. Understanding what you're giving up is the real skill.

### Concepts

- Relational model: why tables with foreign keys are a mathematical insight, not just a format
- Normalization: eliminate redundancy, enforce consistency — 1NF/2NF/3NF as progressive constraints
- ACID: Atomicity, Consistency, Isolation, Durability — what each means when it fails
- Index internals: B-tree structure and why it makes range queries fast
- ACID vs BASE: what you give up with eventual consistency, and why you'd do it

### Practice Anchor

Design a schema for a social network (users, posts, follows, likes):
1. Normalize to 3NF
2. Identify query patterns and add indexes
3. Write a JOIN-heavy query, profile with `EXPLAIN ANALYZE`
4. Denormalize one table for read performance — measure the tradeoff

## Database

Status: [[Backend Frameworks]]

Tags:

- Relational DB concepts (tables, indexes, SQL basics)
    
- Basic CRUD operations
- 2025-08-0811:43

### Reference

## Database Depth

### Database Depth

**Core question**: Your queries are slow. What now?

**Key concepts**:
- `EXPLAIN ANALYZE`: reading query plans, identifying seq scans
- Index selection: when B-tree, when covering index, when composite
- ORM tradeoffs: convenience vs N+1 queries vs loss of control
- Migration strategies: additive-only changes, backwards-compatible deploys

**Practice**: Add 1M rows to a test DB. Run a JOIN-heavy query. Add indexes one by one. Measure each change with `EXPLAIN ANALYZE`. Document what changed and why.
