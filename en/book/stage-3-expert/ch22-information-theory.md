Last updated: 2026-08-08

# Ch 22 · Information Theory: Entropy, Encoding, Compression

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: Computational Thinking

## Core Question

What is information? How do we measure it?

## Soul Insight

Entropy is a measure of uncertainty. Information theory, data compression, machine learning, and cryptography all share this single underlying language. Once you understand Shannon entropy, cross-entropy loss stops being an arbitrary ML choice — it becomes the natural, principled answer to "how do I measure how wrong my probability estimates are?"

## Concepts

- Shannon entropy: H(X) = -Σ p(x) log p(x) — uncertainty as a quantity
- Mutual information: how much does knowing X reduce uncertainty about Y?
- Data compression: Shannon's source coding theorem sets the theoretical limit
- Huffman coding: optimal prefix-free encoding as a tree
- Cross-entropy: H(p, q) — the cost of encoding p-distributed data with a q-based code
- Why cross-entropy is the natural loss for classification

## Practice Anchor

Derive why cross-entropy is the right loss function for classification — from information theory, not from convention:

1. You have true distribution p (one-hot labels)
2. Your model predicts distribution q (softmax outputs)
3. The cost of using q to encode p-distributed data is H(p, q) = -Σ p(x) log q(x)
4. Minimizing this is equivalent to maximizing log-likelihood

## Status

> Placeholder — content to be developed.

## Related Notes

- [Ch 4 · Probability](../stage-1-foundations/ch04-probability) — probability prerequisite
- [Ch 13 · ML Foundations](../stage-2-advanced/ch13-ml-foundations) — where cross-entropy loss is used
- [Ch 23 · Deep Learning Architectures](ch23-deep-learning) — attention as information routing
