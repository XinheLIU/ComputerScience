Last updated: 2026-08-08

# Web Extension III · High-Availability Architecture, Data Systems & Cloud Native

> **Optional** — SE Track readers after completing Stage 3 (Ch 21–29)

---

## W3.1 · High-Availability Web Architecture

**Core question**: How does a web service stay up when things fail?

**Key concepts**:
- Load balancing: L4 (TCP) vs L7 (HTTP) — different visibility, different routing options
- Health checks: what "healthy" means and why it's non-trivial
- Circuit breaker pattern: fail fast, recover gradually — Hystrix/Resilience4j model
- Graceful degradation: what the system does when a dependency is unavailable
- Canary deployments: route 1% of traffic to the new version first

**Practice**: Simulate a dependency failure in a local multi-service setup. Measure: what happens without a circuit breaker? With one? Document recovery time.

**Existing notes**: [Microservices](../04-design-and-architecture/04-distributed-systems/microservices), [Service-Oriented Architecture](../04-design-and-architecture/04-distributed-systems/service-oriented-architecture)

---

## W3.2 · Large-Scale Data Systems

**Core question**: When does a relational database stop being enough?

**Key concepts**:
- OLTP vs OLAP: different query patterns → different storage engines (row vs columnar)
- Data warehouse fundamentals: star schema, fact tables, dimension tables
- Lambda vs Kappa architecture: batch + stream vs stream-only
- Event sourcing: the log as the source of truth — replayability as a superpower

**Practice**: Query the same dataset with PostgreSQL and a columnar format (Parquet via DuckDB). Measure: aggregation query on 10M rows. Explain the difference.

**Existing notes**: [Big Data Tech](../03-systems-and-data/04-data-platforms/big-data-tech), [Big Data Technology](../03-systems-and-data/04-data-platforms/big-data-technology)

---

## W3.3 · Cloud Native & Containers

**Core question**: What problem does Kubernetes solve that Docker alone doesn't?

**Key concepts**:
- Container as a unit of isolation: namespaces + cgroups under the hood
- Docker: image layers, Dockerfile best practices, multi-stage builds
- Kubernetes: desired state reconciliation — you declare what you want, the control plane makes it real
- The 12-factor app: stateless processes, config in env vars, treat logs as streams
- Observability in Kubernetes: why pod logs aren't enough; metrics + traces required

**Practice**: Deploy a 2-service application to a local Kubernetes cluster (k3d or minikube). Write a liveness + readiness probe. Simulate a crash: watch Kubernetes recover it.

**Existing notes**: [DevOps & Deployment](../05-engineering-practice/03-operations/devops-and-deployment)

---

> **Completion**: You have now worked through the full SE track. Return to [Ch 30 · Learning Methods](../stage-3-expert/ch30-learning-methods) and [Ch 31 · Next Steps](../stage-3-expert/ch31-next-steps).
