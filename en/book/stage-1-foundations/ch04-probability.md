Last updated: 2026-08-08

# Ch 4 · Probability Is Not Frequency

> **Stage**: 第一阶 · Foundations (L5 → L4) | **Pillar**: Math Foundations

## Core Question

How do we quantify uncertainty?

## Soul Insight

The Bayesian view: probability is a measure of belief, not frequency. Knowledge is a prior; observation is an update. This reframing makes probability a tool for reasoning under uncertainty — not just a tool for counting coin flips.

## Concepts

- Sample space, events, probability axioms
- Conditional probability: P(A|B) — what changes when you know B?
- Bayes' theorem: how evidence updates belief
- Independence vs correlation
- Common distributions: Bernoulli, Binomial, Normal — and when each applies

## Practice Anchor

Derive Naive Bayes spam filtering from first principles:
1. Prior: P(spam) based on historical data
2. Likelihood: P(word | spam) for each word
3. Posterior: P(spam | words) via Bayes
4. Decision rule: classify if P(spam | words) > threshold

No library needed — understand why it works, not just that it works.

## Status

> Placeholder — content to be developed.

## Related Notes

- Seeds for [Ch 13 · ML Foundations](../stage-2-advanced/ch13-ml-foundations) — probability is the language of ML
- Seeds for [Ch 22 · Information Theory](../stage-3-expert/ch22-information-theory) — entropy as expected information
