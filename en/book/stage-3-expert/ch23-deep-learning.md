Last updated: 2026-08-08

# Ch 23 · Deep Learning Architectures: The Logic of Evolution

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: AI Depth

## Core Question

Why do we need different neural network architectures? What problem does each solve?

## Soul Insight

Architecture choices are **inductive bias** design. CNN exploits spatial locality. RNN exploits sequential dependency. Transformer breaks locality constraints entirely using attention. Every architectural innovation is an answer to: "what structure should the model assume about its data?" Getting the bias right matters as much as the data.

## Concepts

- Inductive bias: what structure an architecture assumes (and therefore learns better)
- CNN: local receptive fields, weight sharing — why it works for images
- RNN/LSTM: sequential state — why vanilla RNN fails on long sequences (vanishing gradient)
- Attention mechanism: information-theoretic view — each query selects relevant keys
- Transformer: self-attention as global pairwise interaction; O(n²) cost is the tradeoff
- Residual connections: why depth was previously hard, how skip connections solve it
- Layer normalization: why batch norm fails for sequences

## Practice Anchor

Implement a minimal Transformer encoder from scratch (numpy or PyTorch):
1. Scaled dot-product attention: `softmax(QK^T / √d_k) V`
2. Multi-head attention: why multiple heads, not one?
3. Positional encoding: why sinusoidal vs learned
4. Feed-forward sublayer + residual + layer norm

Goal: every line has a "why."

## Status

> Placeholder — content to be developed.

## Related Notes

- [Ch 14 · Neural Networks](../stage-2-advanced/ch14-neural-networks) — prerequisite
- [Ch 22 · Information Theory](ch22-information-theory) — attention as information selection
- [Ch 24 · LLM](ch24-llm) — Transformer applied at scale
