Last updated: 2026-08-08

# Ch 19 · Security: Threat Modeling Thinking

> **Stage**: 第二阶 · Advanced (L4 → L3) | **Pillar**: Engineering Practice

## Core Question

How do you think about security systematically?

## Soul Insight

Security is not a checklist of vulnerabilities — it is **threat modeling**. Ask "what can an attacker do?" before asking "what should we prevent?" The attack surface is defined by trust boundaries; every place where data crosses a trust boundary is a potential threat.

## Concepts

- STRIDE threat model: Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege
- Trust boundaries: where data enters from an untrusted source
- Authentication vs Authorization: proving identity vs granting permission
- The OWASP Top 10 as examples of common trust boundary failures
- Defense in depth: why one layer of security is never enough

## Practice Anchor

Threat model a simple web application (user registration + login + profile):
1. Draw the data flow diagram
2. Mark trust boundaries (browser → server, server → DB)
3. Apply STRIDE to each crossing
4. Prioritize: which threats have highest impact × likelihood?

## Status

> Security notes cover mechanics. This chapter introduces the *methodology*.

## Related Notes

- [Security](../05-engineering-practice/04-security/security) — existing security notes
- [Web Extensions II](../web-extensions/web-ext-2) — web-specific security (optional SE track)
