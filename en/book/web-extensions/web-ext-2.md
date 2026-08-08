Last updated: 2026-08-08

# Web Extension II · Backend Architecture, Databases & Frontend Systems

> **Optional** — SE Track readers after completing Stage 2 (Ch 11–20)

---

## W2.1 · Backend Architecture in Practice

**Core question**: How does a backend evolve from a script to a production system?

**Key concepts**:
- MVC → service layer → event-driven: each step solves a specific scaling pain
- Domain logic isolation: why business rules should not import HTTP framework classes
- Request lifecycle: middleware, routing, handler, response — tracing a request through the stack
- Background jobs: when synchronous response is the wrong model

**Practice**: Refactor a monolithic FastAPI app: extract a service layer, add a background task queue (Celery or RQ), measure the difference in response time.

**Existing notes**: [Backend Frameworks](../05-engineering-practice/02-frameworks/backend-frameworks), [Architecture Styles](../04-design-and-architecture/03-software-architecture/architecture-styles)

---

## W2.2 · Database Depth

**Core question**: Your queries are slow. What now?

**Key concepts**:
- `EXPLAIN ANALYZE`: reading query plans, identifying seq scans
- Index selection: when B-tree, when covering index, when composite
- ORM tradeoffs: convenience vs N+1 queries vs loss of control
- Migration strategies: additive-only changes, backwards-compatible deploys

**Practice**: Add 1M rows to a test DB. Run a JOIN-heavy query. Add indexes one by one. Measure each change with `EXPLAIN ANALYZE`. Document what changed and why.

**Existing notes**: [SQL Execution](../03-systems-and-data/03-databases-and-sql/sql-execution), [Database](../03-systems-and-data/03-databases-and-sql/database)

---

## W2.3 · Frontend Systems

**Core question**: What is the browser actually doing?

**Key concepts**:
- Critical rendering path: parse HTML → build DOM → CSSOM → layout → paint
- JavaScript runtime: event loop, call stack, microtask queue — why `async/await` works
- Component model: why React/Vue exist — managing state and reconciling the DOM
- Bundle size as a performance constraint: why tree-shaking and code splitting matter

**Practice**: Open Chrome DevTools Performance tab. Record a page load. Identify: time to first byte, render-blocking resources, main thread work.

**Existing notes**: [Front-end Tools](../05-engineering-practice/02-frameworks/front-end-tools)

---

## W2.4 · Advanced API Design

**Core question**: How do APIs survive for years without breaking clients?

**Key concepts**:
- Idempotency keys: making non-idempotent operations safe to retry
- API versioning: URI (`/v2/`) vs header — tradeoffs
- Contract testing (Pact): verify provider/consumer compatibility without integration tests
- Rate limiting: token bucket algorithm; how to communicate limits to clients

**Practice**: Add idempotency key support to a payment endpoint. Write a contract test between a mock consumer and your API.

---

> **After this pack**: Continue to Stage 3 core chapters (Ch 21–29), then optionally [Web Extension III](web-ext-3).
