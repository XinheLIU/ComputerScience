Last updated: 2026-08-08

# Ch 29 · Technology Selection & Engineering Judgment

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: Engineering Practice

## Core Question

Faced with multiple technology choices, how do you decide?

## Soul Insight

Technology selection is fundamentally **risk management**. Features, maturity, team capability, migration cost — these are all variables, not rankings. There is no best technology outside of context. The engineer who gives you a recommendation without asking about your constraints is not helping you.

## Concepts

- Technology radar thinking: adopt, trial, assess, hold — and why the quadrant matters
- Total cost of introduction: license, learning curve, operational overhead, migration cost
- Technical debt quantification: what does "we'll pay for this later" actually cost?
- Team capability as a constraint: the best technology is the one your team can operate
- When to use boring technology: stability, hiring, community support — underrated virtues
- Reversibility: prefer reversible choices early; make irreversible ones late and carefully

## Practice Anchor

Build a selection matrix for choosing a database for a new service:

| Criterion | Weight | PostgreSQL | MongoDB | DynamoDB |
|-----------|--------|-----------|---------|----------|
| Query flexibility | 30% | ... | ... | ... |
| Operational complexity | 25% | ... | ... | ... |
| Team experience | 20% | ... | ... | ... |
| Scale ceiling | 15% | ... | ... | ... |
| Cost | 10% | ... | ... | ... |

Fill it in for your actual context. The process matters more than the conclusion.

## Status

> Placeholder — content to be developed.

## Related Notes

- [Ch 28 · System Design](ch28-system-design) — selecting architecture components
- [Backend Frameworks](../05-engineering-practice/02-frameworks/backend-frameworks)
