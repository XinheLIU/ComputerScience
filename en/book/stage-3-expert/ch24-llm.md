Last updated: 2026-08-08

# Ch 24 · How Large Language Models Work

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: AI Depth

## Core Question

How does predicting the next token produce "intelligence"?

## Soul Insight

A language model is a compressed world model. The prediction task forces the model to learn the statistical structure of the world — not just words, but the relationships, facts, and reasoning patterns encoded in text. Emergent capabilities are not magic; they are what happens when a powerful enough function approximator is trained on a rich enough signal.

## Concepts

- Autoregressive generation: sampling from P(x_t | x_1...x_{t-1})
- Scaling laws: compute, data, and parameter count — and why they interact
- In-context learning: why examples in the prompt change behavior without weight updates
- Instruction tuning and RLHF: aligning the model to intent, not just next-token prediction
- Emergent capabilities: threshold behavior at scale — and why it's hard to predict
- Tokenization: BPE/SentencePiece — why tokenization choices matter

## Practice Anchor

Trace the GPT lineage to understand what each generation added:

| Model | Key change | Why it mattered |
|-------|-----------|-----------------|
| GPT-1 | Unsupervised pretraining + finetuning | Transfer learning for NLP |
| GPT-2 | Scale + zero-shot | Capabilities from scale alone |
| GPT-3 | In-context learning | No finetuning needed |
| InstructGPT | RLHF | Alignment to human intent |
| GPT-4 | Multimodal + scale | General capability jump |

## Status

> Placeholder — content to be developed.

## Related Notes

- [Ch 23 · Deep Learning Architectures](ch23-deep-learning) — Transformer prerequisite
- [LangChain and LangGraph](../05-engineering-practice/02-frameworks/langchain-langgraph) — applied LLM tooling
- [Ch 25 · AI Engineering](ch25-ai-engineering) — deploying LLMs in products
