Last updated: 2026-08-08

# Ch 20 · Testing Strategy & Observability

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Engineering Practice

## Core Question

How do you build confidence in a production system?

## Soul Insight

Tests are a specification of behavior. Observability is visibility into a black box. They are complementary — tests verify the system does what you think before deployment; observability reveals what it actually does in production. Neither replaces the other.

## Concepts

- Testing pyramid: unit → integration → E2E — cost and confidence tradeoffs
- Contract testing: service boundaries verified without running the whole system
- Property-based testing: generate inputs, not just examples
- The three pillars of observability: logs (what happened), metrics (how much/often), traces (why this request was slow)
- Structured logging: machine-parseable events, not human prose

## Practice Anchor

Instrument a simple API service:
1. Add structured JSON logging with request ID, latency, status
2. Add a Prometheus counter for request count and a histogram for latency
3. Add a trace context header so distributed calls can be correlated
4. Write a test: reproduce a failure via logs alone without a debugger

## Status

> Placeholder — content to be developed.

## Related Notes

- [Code Testing](../04-design-and-architecture/01-design-foundations/code-testing) — unit testing mechanics
- [Debugging and Testing](../02-programming/02-quality-and-correctness/debugging-and-testing)
- [DevOps & Deployment](../05-engineering-practice/03-operations/devops-and-deployment)
