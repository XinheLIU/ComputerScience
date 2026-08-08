Last updated: 2026-08-08

# Ch 26 · Distributed Systems: Consistency & Evolution

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: Systems Thinking

## Core Question

How does a multi-node system maintain consistency when the network is unreliable?

## Soul Insight

CAP theorem is not a checklist — it is a lens for understanding distributed tradeoffs. A consistency model is an agreement about *when data can be trusted*. Every distributed system makes this tradeoff; the question is whether you made it consciously or by accident.

## Concepts

- CAP theorem: Consistency, Availability, Partition tolerance — and why you can't have all three
- PACELC: extending CAP to include latency tradeoffs even without partitions
- Consistency model spectrum: linearizability → sequential → causal → eventual consistency
- Consensus algorithms: Raft/Paxos intuition — why agreement is hard with failures
- Replication strategies: single-leader, multi-leader, leaderless
- Conflict resolution: last-write-wins vs CRDTs vs application-level merging

## Practice Anchor

Analyze three real systems and their consistency choices:

| System | Consistency choice | Why |
|--------|-------------------|-----|
| etcd/ZooKeeper | Linearizable | Coordination requires exactness |
| Kafka | At-least-once delivery | Throughput over exactness |
| DynamoDB | Eventual (tunable) | Availability over consistency for shopping carts |

For each: what would break if they chose stricter consistency? What already breaks with looser?

## Status

> Distributed systems notes exist with significant detail.

## Related Notes

- [Distributed System](../04-design-and-architecture/04-distributed-systems/distributed-system)
- [Microservices](../04-design-and-architecture/04-distributed-systems/microservices)
- [Database and Cache](../04-design-and-architecture/04-distributed-systems/database-and-cache)
