Last updated: 2026-08-08

# Web Extension I · HTTP, REST & Full-Stack Basics

> **Optional** — SE Track readers after completing Stage 1 (Ch 1–10)

This extension pack gives SE-track readers a working full-stack foundation using the core concepts from Stage 1.

---

## W1.1 · HTTP & Web Fundamentals

**Core question**: What happens when you type a URL and press Enter?

**Key concepts**:
- Request/response model: method, URL, headers, body, status codes
- Statelessness: why HTTP has no memory, and how cookies/sessions paper over it
- HTTPS: TLS in one paragraph — certificate, handshake, symmetric key exchange
- HTTP/1.1 vs HTTP/2 vs HTTP/3: head-of-line blocking → multiplexing → QUIC

**Practice**: Use `curl -v` to make a request. Read every header line. Map each to a concept.

**Existing notes**: [Web Development & Networking](../03-systems-and-data/02-networks-and-web/web-development-and-networking)

---

## W1.2 · RESTful API Design

**Core question**: How do you design an API that others can use without reading your source code?

**Key concepts**:
- Resources, not actions: `/users/123` not `/getUser?id=123`
- HTTP verbs as intent: GET (safe, idempotent), POST (create), PUT/PATCH (update), DELETE
- Idempotency: why PUT must be idempotent and why it matters for retries
- Error handling: 4xx (client error) vs 5xx (server error); structured error bodies
- Versioning strategies: URI versioning vs header versioning

**Practice**: Design the API for a todo app. Identify every resource and its operations. Check idempotency for each endpoint.

---

## W1.3 · Simple Full-Stack Prototype

**Core question**: What does "end-to-end" actually mean?

**Goal**: Build the simplest possible full-stack application — in-memory data store, REST API, minimal frontend — to make the complete request chain concrete.

**Stack** (minimal, replaceable):
- Backend: Python FastAPI (or any framework) with in-memory dict storage
- Frontend: plain HTML + `fetch()` — no framework required
- Test: curl + browser DevTools Network tab

**What to observe**: How does a button click become a database write? Trace every hop.

**Existing notes**: [Backend Frameworks](../05-engineering-practice/02-frameworks/backend-frameworks)

---

> **After this pack**: Continue to Stage 2 core chapters (Ch 11–20), then optionally [Web Extension II](web-ext-2).
