Last updated: 2026-08-08

# Ch 15 · Networks & Protocols: First Principles for Unreliable Environments

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Systems Thinking

## Core Question

How do two machines communicate reliably over an unreliable network?

## Soul Insight

Latency, packet loss, and node failure are the norm, not exceptions. Protocols are *agreements* for fighting uncertainty — not clever tricks. Every networking protocol is an answer to one question: "what do we do when this goes wrong?"

## Concepts

- TCP vs UDP: reliability vs latency tradeoff — which to choose and why
- HTTP evolution: HTTP/1.1 → HTTP/2 → HTTP/3 (what problem each version solved)
- TLS handshake: how two strangers establish a shared secret
- DNS: why it is a distributed system problem, not just a lookup table
- The OSI model as a thinking tool, not a rigid law

## Practice Anchor

```bash
# Capture a real HTTPS connection
sudo tcpdump -i any -w /tmp/capture.pcap host example.com &
curl https://example.com
# Analyze in Wireshark: identify TLS ClientHello, ServerHello, certificate exchange
```

Map each packet to: "which problem does this step solve?"

## Status

> Web networking notes exist. This chapter focuses on the *first-principles reasoning*, not the reference material.

## Related Notes

- [Web Development & Networking](../03-systems-and-data/02-networks-and-web/web-development-and-networking) — existing web/networking notes
- [Web Extensions I](../web-extensions/web-ext-1) — HTTP/REST in practice (optional SE track)
