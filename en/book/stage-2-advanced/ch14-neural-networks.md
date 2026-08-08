Last updated: 2026-08-08

# Ch 14 · Gradient, Optimization & Neural Networks

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Math & AI

## Core Question

Why can neural networks learn?

## Soul Insight

Gradient descent is searching for a valley in the loss landscape. Backpropagation is just the chain rule applied systematically. There is no mystery — once you see the computation graph and understand that every node has a local gradient, the whole thing is bookkeeping.

## Concepts

- Computation graph: how operations compose, how gradients flow backward
- Automatic differentiation: forward mode vs reverse mode
- Gradient descent variants: SGD, momentum, Adam — and why each was invented
- Neural network basics: layers as function composition, activation functions as non-linearity
- Why depth helps: composing simple functions can approximate complex ones

## Practice Anchor

Implement a 2-layer neural network with numpy only — no PyTorch, no autograd:

```python
# Forward pass: Z1 = W1·X + b1, A1 = relu(Z1), Z2 = W2·A1 + b2
# Loss: cross-entropy
# Backward pass: manually derive dL/dW2, dL/db2, dL/dW1, dL/db1
# Update: W -= lr * dL/dW
```

Train on MNIST subset. The goal: understand why every line exists.

## Status

> Placeholder — content to be developed.

## Related Notes

- [Ch 13 · ML Foundations](ch13-ml-foundations) — prerequisite
- [LangChain and LangGraph](../05-engineering-practice/02-frameworks/langchain-langgraph) — applied AI tooling
