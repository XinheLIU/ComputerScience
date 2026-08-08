Last updated: 2026-08-08

# Ch 13 · The Mathematical Essence of Machine Learning

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Math & AI

## Core Question

What is machine learning actually doing?

## Soul Insight

ML = **function approximation + regularization + generalization**. These three concepts explain almost every ML decision. A model is a hypothesis about which function fits the data. Regularization is controlled skepticism. Generalization is why we care at all.

## Concepts

- Loss functions: what "fitting data" means formally
- Overfitting/underfitting: the bias-variance tradeoff
- Regularization: L1 (sparsity) vs L2 (smoothness) — and *why* they have those effects
- Cross-validation: estimating generalization without touching test data
- The generalization gap: why training accuracy is a lie

## Practice Anchor

Derive linear regression from scratch — every mathematical decision has a motivation:

```python
# 1. Define loss: MSE = mean((y_pred - y_true)^2)
# 2. Minimize: take derivative, set to zero
# 3. Add L2 regularization: why does this prevent large weights?
# 4. Visualize: train vs validation loss as model complexity increases
```

No sklearn. Understand each line before writing the next.

## Status

> Placeholder — content to be developed.

## Related Notes

- [Ch 4 · Probability](../stage-1-foundations/ch04-probability) — prerequisite
- [Ch 5 · Linear Algebra](../stage-1-foundations/ch05-linear-algebra) — prerequisite
- [Ch 14 · Neural Networks](ch14-neural-networks) — next step
