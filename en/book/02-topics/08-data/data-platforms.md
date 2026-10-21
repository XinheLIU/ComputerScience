---
id: data-platforms
locale: en
title: "Data Platforms"
status: published
created: 2026-10-17
updated: 2026-10-20
---

# Data-Intensive Systems: From Business Constraints to Architecture Decisions

Last updated: 2026-10-20

## Core Question

When does a relational database stop being enough? What determines the architecture of a data system?

## Soul Insight

Data system architecture is not a technology shopping list — it's a series of explicit tradeoffs: latency for consistency, throughput for query flexibility, cost for performance. Understanding what you're giving up matters more than knowing what's popular.

## Key Concepts

- **OLTP vs OLAP**: Transaction processing optimizes for row storage and high-concurrency writes; analytical queries optimize for columnar storage and large-scan throughput
- **CAP theorem in practice**: Partition tolerance is mandatory, so you choose between availability and strong consistency; real systems pick based on what inconsistency the business can tolerate
- **Batch vs stream processing**: Batch offers high throughput and easy fault tolerance for historical data; stream offers low latency and real-time response for continuous data flows. Hybrid architectures balance both
- **Why data layers exist**: Not for architecture diagrams, but to separate concerns — source → collection → transport → storage → compute → application. Each layer solves one concrete problem
- **Logic drives technology**: Requirements determine architecture, architecture determines technology, and technology constraints feed back into product decisions

## Practice Anchor

Compare two query engines using the same dataset (10 million order records):

1. PostgreSQL (row storage) running an aggregation: `SELECT date, SUM(amount) FROM orders GROUP BY date`
2. DuckDB + Parquet (columnar storage) running the same query
3. Measure and explain: query time, bytes scanned, memory usage
4. Derive: What query patterns suit row storage? What patterns suit columnar storage?

---

## Design Goals for Data Systems

Before building a data system, clarify six design goals:

### 1. Data Types

What types of data must the system handle?

- **Structured data**: Logs, database records, event streams — with explicit schemas, expressible as tables or JSON
- **Unstructured data**: Video, images, user comments, documents — no fixed format, traditionally hard to query or analyze

Historically, big data systems focused on structured data. Large language models and multimodal capabilities now make unstructured data processing viable, but this chapter focuses on the core mechanisms of structured data systems.

### 2. Data Scale

How much data must the system process?

After 2003, Google's GFS, MapReduce, and Bigtable papers catalyzed the Hadoop ecosystem, moving TB/PB-scale processing from proprietary infrastructure to open-source accessibility. Mobile internet and IoT further accelerated data production rates.

Modern data systems require:
- **Horizontal scalability**: Linear capacity growth by adding machines
- **Distributed architecture**: Data volumes that cannot fit on a single machine must be distributed across storage and compute

### 3. Latency Requirements

How much delay is acceptable between data generation and availability?

- **Minutes to hours**: Decision support, report generation — batch processing suffices
- **Seconds**: User behavior analysis, real-time recommendations — requires stream processing
- **Milliseconds**: Computational advertising, fraud detection — requires precomputation + high-speed queries

Latency requirements directly determine compute modes: batch (high throughput, high latency) or stream (low latency, complex state management).

### 4. Cost

Hardware costs have fallen, but rising data volumes and latency demands have offset Moore's Law dividends. Cost control includes:
- **Storage cost**: Cold/hot separation — object storage for cold data, SSD for hot data
- **Compute cost**: On-demand elasticity vs reserved resources, batch vs stream
- **Development cost**: Open-source vs commercial products, self-managed vs managed services

This chapter prioritizes open-source solutions and cost-controlled architecture examples.

### 5. Security and Privacy

GDPR, Personal Information Protection Laws, and similar regulations require data systems to consider from the design phase:
- **Data classification**: What is sensitive? Who can access it?
- **Least privilege**: Tenant isolation, row-level permissions, field masking
- **Audit and deletion**: Access logs, deletion propagation (from raw data through all derived tables)

Security is not a pre-launch checklist but a design constraint across collection, transport, storage, compute, and application layers.

### 6. Maintainability

Most systems receive ample resources during initial construction but gradually become unmaintainable during long-term operation due to neglect. Maintainability includes:
- **Observability**: Data lineage, task dependencies, quality monitoring
- **Recoverability**: Backups, rollbacks, rerun mechanisms
- **Evolvability**: Schema changes, new data sources, technology stack migrations

Later chapters will discuss how to design systems for sustained operation.

---

## Architecture Tradeoffs: Five Core Decisions

Once design goals are set, make tradeoffs across these five dimensions:

### 1. CAP Theorem: Choose AP or CP

The CAP theorem states that distributed systems can only achieve two of three:
- **C (Consistency)**: All nodes see the same data at the same time
- **A (Availability)**: System remains operational
- **P (Partition tolerance)**: System functions despite network partitions

**P is mandatory** — distributed systems cannot avoid network partitions, so the real choice is **CP or AP**:
- **CP systems**: Prioritize consistency, sacrifice availability during partitions (etcd, ZooKeeper)
- **AP systems**: Prioritize availability, tolerate temporary inconsistency, eventual consistency (DynamoDB, Cassandra)

**Big data analytics systems typically choose AP**:
- Cost savings require horizontal scaling for massive data volumes
- Use cases (decision support, recommendations) tolerate short-term inconsistency
- Eventual consistency suffices

### 2. Batch vs Stream Processing

| Dimension | Batch Processing | Stream Processing |
|---|---|---|
| **Latency** | Minutes to hours | Seconds to milliseconds |
| **Throughput** | High (full resource utilization) | Relatively lower |
| **Suitable Data** | Large historical datasets | Continuous data streams |
| **Fault Tolerance** | Simple (rerun entire batch on failure) | Complex (checkpoints, state recovery) |
| **Implementation Complexity** | Low | High |

**Hybrid batch-stream architectures** are mainstream:
- Stream processing meets real-time needs
- Batch processing corrects historical data, performs full-volume calculations
- Both share data models and business logic

### 3. OLTP vs OLAP

| Dimension | OLTP (Transaction Processing) | OLAP (Analytical Queries) |
|---|---|---|
| **Typical Systems** | MySQL, PostgreSQL | ClickHouse, Doris, Snowflake |
| **Storage Format** | Row storage (fast single-row lookup) | Columnar storage (fast column scans) |
| **Query Pattern** | Point queries, small-range updates | Large-range aggregations, multi-table JOINs |
| **Concurrency** | High QPS writes and queries | High-throughput scans, limited QPS |
| **Transactions** | Strong ACID | Usually unnecessary |

**Big data systems prioritize OLAP**:
- Massive data volumes — columnar storage reduces I/O
- Query patterns dominated by aggregations, not frequent single-row updates
- Strong transaction guarantees unnecessary

### 4. Data Quality vs Processing Speed

A pragmatic tradeoff:
- **Prioritize quality**: Strict schema validation, multi-layer cleansing, synchronous processing — slow but clean
- **Prioritize speed**: Schema-free, minimal validation, asynchronous processing — fast but may admit dirty data

**Practical compromise**:
- **Main path**: Simple rules (format matching, range checks) that don't slow ingestion
- **Side path**: Heavy processing runs asynchronously in the background, isolating or correcting issues upon discovery

### 5. Cost vs Performance

No universal answer — depends on specific scenarios:
- **Storage**: Object storage (S3) cheap but slow, SSD fast but expensive
- **Compute**: Elastic on-demand resources pay-as-you-go, reserved resources cheaper but require accurate forecasting
- **Query**: Precomputation trades space for time, ad-hoc queries flexible but slow

Later chapters will expand on specific technology choices.

---

## Logical Layers: The Data Lifecycle

A complete data system can be divided into seven layers, bottom-up:

### 1. Data Sources

Various heterogeneous data origins external to the system:
- **Application logs**: Web servers, mobile app instrumentation
- **Business databases**: OLTP data from MySQL, PostgreSQL
- **Third-party data**: API interfaces, public datasets

### 2. Data Collection

Collection schemes tailored to different sources:
- **Log collection**: Filebeat, Fluentd
- **Database collection**: CDC (Change Data Capture), full + incremental sync
- **API collection**: Scheduled polling, webhook push

The collection layer must address: data format unification, collection completeness, deduplication, timestamp standardization.

### 3. Data Ingestion

Initial processing of collected data:
- **Format conversion**: JSON → Parquet, CSV → table structures
- **Simple validation**: Required fields, data types
- **Routing**: Batch processing writes to storage, stream processing proceeds directly to compute

### 4. Data Transport

The "data highway" for efficient, reliable data transmission:
- **Message queues**: Kafka, Pulsar
- **Features**: Persistence, partitioning, ordering guarantees, backpressure control

The transport layer decouples upstream producers from downstream consumers, providing buffering and replay capabilities.

### 5. Data Storage

Storage engines chosen based on access patterns:
- **Raw layer**: Object storage (S3, HDFS), preserves complete raw data
- **Structured layer**: Columnar storage (Parquet) or data warehouse tables
- **Cold/hot separation**: Hot data on SSD, cold data archived

Storage is the core of offline systems; the choice between coupled or separated storage/compute affects cost and performance.

### 6. Compute Layer

Further data processing and querying:
- **Batch engines**: Spark, Flink Batch
- **Stream engines**: Flink, Kafka Streams
- **Query engines**: Presto, ClickHouse

The compute layer balances:
- **Coupled storage/compute** (e.g., ClickHouse): Data and compute co-located — fast but limited scalability
- **Separated storage/compute** (e.g., Snowflake): Storage and compute scale independently — flexible but network overhead

### 7. Application Layer (External Interface)

Three abstracted categories:
- **Product interfaces**: BI tools, data dashboards, self-service query platforms
- **OpenAPI**: RESTful API, GraphQL for system-to-system calls
- **MCP protocol**: Structured interfaces for AI agent calls

Application layer design is tightly coupled to specific business needs.

---

## Real Case: Evolution from Baidu Log Platform to UDW

### Background (2008)

- Google's three foundational papers recently published, Hadoop just entering China
- Baidu's business unit logs scattered across frontend servers, centrally downloaded to log servers, statistics computed via scripts, results emailed
- **Pain points**: Low development efficiency, poor scalability, difficult maintenance

### Log Platform Established

- Logs unified into Hadoop platform, computed via MapReduce
- Abstracted common statistical operators, provided page-based configuration
- Invented DISQL, a computation language similar to Hive:

```sql
-- Example: Count PV by URL
SELECT url, COUNT(*) 
FROM logs 
GROUP BY url
```

### Explosive Growth and Problems (2011)

- Covered all user log statistics across Baidu
- Compute resources grew from dozens to 5,000 machines
- **New pain points**:
  - Lack of schema control led to massive data and computation duplication
  - Missing data lineage prevented task consolidation
  - Only produced statistical reports, no ad-hoc interactive analysis support

### Refactor into UDW (User Data Warehouse)

Core shift: **From compute-centric to data-centric**

- **Data layering**:
  - Text log layer
  - Structured data layer
  - UDW layer (cleansing, modeling)
  - Data mart layer (application-facing)
  - Visualization layer
- **System decomposition**: Data generation → Transport → Storage → Query/Analysis → Visualization
- **Architecture approached modern mainstream design**

### Stream Capability Extension

To support advertising and personalized recommendations, added stream path:
- Based on Baidu's in-house **Dstream** real-time compute engine
- Redis-like KV engine **Mola**
- **Capability**: Process one log in seconds → Update user tags in real-time → Respond to hundreds of thousands of downstream QPS point queries

---

## Summary

Core logic of building data-intensive systems:

1. **Business requirements determine design goals**: Data types, scale, latency, cost, security, maintainability
2. **Design goals determine architecture tradeoffs**: CAP, batch/stream, OLTP/OLAP, quality/speed, cost/performance
3. **Architecture tradeoffs determine technology choices**: Message queues, storage engines, compute engines
4. **Technology constraints feed back into product decisions**: Closed loop

Developers and users should communicate fully, understanding each other's constraints and needs.

**For data developers**: When facing business requirements, maintain a mental framework, then tailor and adapt to your specific needs.

**For data users**: Understanding technical design helps formulate reasonable requirements and communicate efficiently.

---

## Discussion Questions

1. Besides big data systems, what other complex systems have you encountered? What drove their design tradeoffs?
2. Does your organization's data system align with the logical layers described here? If not, what considerations drove the differences?
3. In your context, what should the CAP (AP/CP), batch/stream, and OLTP/OLAP choices be? Why?

---

## References

- Cao Jiang, *Big Data Application Practice* Lesson 01
- Google's foundational papers: GFS, MapReduce, Bigtable
- Martin Kleppmann, *Designing Data-Intensive Applications*
