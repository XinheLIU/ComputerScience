Last updated: 2026-08-08

# Ch 2 · Data, Types & Representation

> **Stage**: 第一阶 · Foundations (L5 → L4) | **Pillar**: Computational Thinking

## Core Question

Why can computers represent everything? What is a type?

## Soul Insight

A type is not a syntax feature — it is a contract for modeling reality. Abstraction gives bits meaning. Without types, a memory address is just an integer; with a type, it becomes a pointer, a character, a float. Every representation choice is a tradeoff between expressiveness and cost.

## Concepts

- Primitive types and how they map to bits (int, float, bool, char)
- Composite types: structs, arrays, enums
- Value vs reference semantics
- Encoding and representation: ASCII → Unicode, IEEE 754 floating point
- Why integer overflow and floating-point errors are not bugs but consequences of finite representation

## Practice Anchor

Follow the real cost of type mistakes:
- Integer overflow: why `2^31 - 1 + 1` wraps to a negative number
- Unicode encoding: why `len("hello")` and `len("你好")` differ across languages
- Float imprecision: `0.1 + 0.2 != 0.3` — and what to do about it

## Status

> Placeholder — content to be developed.

## Related Notes

- [Programming Basics](../01-foundations/03-programming-foundations/programming-basics)
- [Python](../02-programming/01-languages/python) — Python's dynamic typing as contrast
