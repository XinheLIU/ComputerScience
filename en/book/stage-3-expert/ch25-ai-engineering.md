Last updated: 2026-08-08

# Ch 25 · AI Systems Engineering

> **Stage**: 第三阶 · Expert (L3 → L2) | **Pillar**: AI Depth

## Core Question

What does it take to turn an AI model into a reliable product?

## Soul Insight

AI engineering is not model engineering. The data flywheel, the evaluation framework, and deployment reliability are the real engineering challenges. A model that scores 90% on a benchmark can be useless in production without these. The model is 20% of the work; the system around it is 80%.

## Concepts

- Training/inference separation: different optimization targets, different infrastructure
- Data quality pipelines: garbage in, garbage out — at scale
- Evaluation frameworks: offline metrics, human eval, A/B testing — and why each is necessary
- The data flywheel: production usage generates labels that improve the next model version
- MLOps: model versioning, serving, monitoring, rollback
- Prompt engineering and RAG: augmenting model capability at inference time

## Practice Anchor

Design an evaluation framework for a production AI feature (e.g., a coding assistant):
1. Define offline metrics: exact match, pass@k, semantic similarity
2. Design human evaluation: rubric, inter-annotator agreement
3. Design A/B test: metrics, minimum detectable effect, duration
4. Define monitoring: what signals indicate quality degradation?

## Status

> MLOps notes exist. This chapter elevates to full-system engineering perspective.

## Related Notes

- [MLOps](../05-engineering-practice/03-operations/mlops) — MLOps notes
- [LangChain and LangGraph](../05-engineering-practice/02-frameworks/langchain-langgraph)
- [Ch 24 · LLM](ch24-llm) — model capabilities context
