# From draft notes to data-systems chapters

Last updated: 2026-10-21

Organize around the decisions a reader must make while building a data system. First relocate the existing material into those chapter boundaries; then turn each collection of summaries into an explanation with a working example and a completion check.

Confirmed destination (2026-10-20): these Chinese drafts will become part of the existing **ComputerScience** book. Keep the first rewrite in Chinese and follow the book's three-stage structure. **Phase A is complete:** the nine originals have been split into 14 chapter files, three prerequisite files, and one review file. Their text is preserved verbatim in 31 labeled source blocks. **Phase B restructured 2026-10-20:** the original 14-chapter Stage 3 scatter has been consolidated into 3–4 in-depth Stage 2 topic articles.

**Phase B absorption complete (2026-10-21):** all 31 source blocks are absorbed into five Chinese articles under `zh/book/02-topics/08-data/`, deduplicated against one canonical home per topic, and the absorbed working files have been deleted. Only this plan, the two JSON records, and the trimmed review queue remain in `draft/`. See [§6](#_6-phase-b-absorption-record-2026-10-21) for the block ledger and open items.

The [move map](reorganization-map.json) records original paths, line spans, hashes, and destinations. The [audit report](reorganization-audit.json) records preservation and publication checks. Both are now historical: the working files they point to were deleted on 2026-10-21. The chapter-file links in §1 and §3 point to those deleted files; §6 says where each block lives now.

## 1. What is actually in the drafts

The baseline inventory contained **9 Markdown files, 2,454 lines, and 334,655 bytes** before this plan. None were identical files. Their overlap is mostly repeated summaries of the same lessons, rather than exact file duplicates. Original filenames below identify provenance; links lead to their current homes.

| Current source | Actual contents | Editorial assessment |
| --- | --- | --- |
| `big-data-system-intro.md` → [architecture](data-systems/data-platforms.md) | Requirements, architectural tradeoffs, the end-to-end data flow, and Baidu Log → UDW evolution | A useful opening chapter once its choices become conditional on a concrete workload. |
| `big-data-system-design.md` → [ingestion](data-systems/data-ingestion.md), [compute](data-systems/batch-and-stream-processing.md) | Two separate lessons: ingestion/transport and compute-engine selection | Split them. The filename hides both topics. |
| `data-collection.md` → [collection](data-systems/data-collection.md), [metadata](data-systems/metadata-and-lineage.md), [modeling](data-systems/analytical-data-modeling.md) | Event tracking, collection requirements, metadata/layering, and data modeling | Keep collection here; move the latter two topics to their real homes. |
| `data-storage.md` → [database](prerequisites/database.md), [models/indexes](prerequisites/storage-models-and-indexes.md), [AI review](review/ai-storage-updates.md) | Database fundamentals, document/graph/time-series/vector models, normalization, persistence case studies, and a speculative “2026 update” | Separate prerequisites from system design; isolate the update for review. |
| `data-storage-2.md` → [consistency](prerequisites/distributed-system.md), [cloud](data-systems/cloud-data-platforms.md), [analytical storage](data-systems/analytical-storage.md) | Replication, consistency, consistent hashing, CAP/ACID/BASE, cloud commentary, and analytical-storage design | Three different destinations; several definitions contradict other notes or need correction. |
| `dw.md` → [warehouse/lakehouse](data-systems/warehouses-and-lakehouses.md), [metadata](data-systems/metadata-and-lineage.md), [modeling](data-systems/analytical-data-modeling.md), [ETL](data-systems/etl-and-identity.md) | Warehouse/lake/lakehouse choice, metadata/layering, modeling, and ETL | The main source for the analytical-data chapters. Much of the metadata/modeling also appears in `data-collection.md`. |
| `data-governance.md` → [quality](data-systems/data-quality.md), [lineage](data-systems/metadata-and-lineage.md) | A governance overview, data-quality management, and lineage | Use the overview as orientation, then develop quality and lineage separately. |
| `platform-governance.md` → [maintenance](data-systems/data-lifecycle-and-recovery.md), [security](data-systems/data-security-and-compliance.md), [scheduling](data-systems/resource-scheduling.md) | Lifecycle/housekeeping, security/compliance, then resource scheduling | Restore a teaching order: scheduling → maintenance → security review. |
| `cloud.md` → [cloud deployment](data-systems/cloud-data-platforms.md) | Cloud-native concepts and deployment choices, including a China-market case study | Combine into one chapter about operational responsibility, workload, portability, and total cost. |

Most material is secondary source material: summaries attributed to **曹犟 /《大数据应用实战》**, other persistence lessons, and Easy-Vibe tutorials. The business cases and tradeoff discussions are valuable. Repeated TLDRs, “完整总结” wrappers, role-by-role conclusions, and predictions currently interrupt the argument. There is little executable teaching material.

Two overlaps deserve explicit consolidation:

- **Metadata and layering:** `data-collection.md` and `dw.md` summarize lesson 11; the governance overview introduces them again.
- **Data modeling:** `data-collection.md` and `dw.md` summarize lesson 12. Use the fuller `dw.md` version as the starting point, retaining any unique details from the other version.

Do not treat the drafts as a complete copy of the source course. Source references point to collection techniques and a 信创 discussion whose full lessons are absent here. Fill only the gaps the proposed chapters need.

## 2. Reader, scope, and relationship to the current book

**Reader:** a developer who can write Python and SQL, understands HTTP and a relational database, and now needs to design and operate an analytical data pipeline. Product and analysis readers can follow the architecture and decision examples; engineering exercises provide the verification.

**Outcome:** explain where a metric came from, keep its pipeline correct through retries and changes, and justify the system's latency, recovery, security, and cost choices.

The book already has three stages. **Revised destination (2026-10-20):** the drafted material becomes **3–4 in-depth Stage 2 topic articles** under `zh/book/02-topics/08-data/`, not 14 scattered Stage 3 chapters. Each article has multi-angle coverage with visual displays (comparison tables, architecture diagrams, decision trees), mirroring the depth and structure of `frontend-intro` or `backend-intro`.

| Material | Eventual home | Boundary |
| --- | --- | --- |
| Relational modeling, normalization, indexes, and transaction basics | Existing `database` lesson in `02-topics/08-data/` | Already published; the drafts expand it with consistency models and analytical storage patterns. |
| Replication, consistency models, CAP, and consensus distinctions | Existing `distributed-system` lesson in Stage 3 | Expand the existing topic; keep consistent-hashing/sharding basics coordinated with `database-and-cache`. |
| **The three consolidated topic articles below** | `zh/book/02-topics/08-data/` | New Chinese Stage 2 topic lessons, each with the depth and visual structure of frontend-intro. |
| Generic containers, observability, performance diagnosis, and threat modeling | Existing Stage 3 topics | Link to their canonical explanations; teach their application to a data pipeline here. |
| Model training, RAG orchestration, and agent memory | Sibling books where applicable | Keep CS coverage to storage/indexing mechanisms. Retain application commentary in a review note until its destination is clear. |

The existing English [data-platforms lesson](../en/book/03-practice-frontiers/02-distributed-data/data-platforms.md) was rewritten 2026-10-20 and now serves as the architectural introduction. Its OLTP/OLAP, star-schema, and batch/stream outline points are distributed across the consolidated topics below. The [distributed-system lesson](../en/book/03-practice-frontiers/02-distributed-data/distributed-system.md) already owns the general consistency discussion.

## 3. Consolidated structure: 3–4 in-depth topic articles

**Destination:** `zh/book/02-topics/08-data/` — Stage 2 topic deep-dives with multi-angle coverage, comparison tables, architecture diagrams, and decision trees. Each article mirrors the depth and visual structure of `frontend-intro` (1500+ lines, multiple sections, tables, diagrams) or `backend-intro`.

**Working title:** 数据系统设计：从架构到实践

The three core articles correspond to three mental models a reader needs:

### Article 1: 数据库基础与大数据演进 (Database Fundamentals and Big Data Evolution)

**Question:** What is a database, what are the foundational trade-offs, and how did big data emerge?

**Coverage:**
- Database history and evolution: relational → NoSQL → NewSQL → analytical systems
- CAP theorem deep dive: consistency models, real partition scenarios, AP vs CP system examples
- Database type taxonomy: OLTP (MySQL, PostgreSQL), OLAP (ClickHouse, Snowflake), key-value (Redis, DynamoDB), document (MongoDB), wide-column (Cassandra, HBase), graph (Neo4j), time-series (InfluxDB), vector (Pinecone, Weaviate)
- When to choose which: decision tree based on workload, consistency needs, query patterns, scale
- ACID vs BASE: what each guarantees, what breaks when you move from one to the other
- Big data milestones: Google papers (GFS, MapReduce, Bigtable) → Hadoop ecosystem → cloud-native systems
- Normalization and denormalization: 1NF/2NF/3NF, when to denormalize for performance
- Index fundamentals: B-tree, LSM-tree, why they matter for different workloads

**Visual elements:**
- Timeline: 1970s relational → 2000s NoSQL → 2010s cloud-native → 2020s lakehouse ✅ (era table in article intro)
- CAP triangle with real systems plotted and failure scenarios illustrated ✅ (mermaid diagram in Era 5)
- ACID vs BASE comparison table with failure modes ✅ (Era 5)
- Index structure diagrams: B-tree vs LSM-tree with read/write/space amplification tradeoffs ✅ (Era 1 + Era 3)
- Decision tree: "Which database should I use?" with concrete branching criteria → **deferred to Article 2 §storage layer** (fits better alongside technology landscape matrix)
- Database type matrix: rows = workload (OLTP, OLAP, caching, analytics), columns = system types → **deferred to Article 2 §storage layer**

**Practice anchors:**
- Compare a normalized schema (3NF) vs denormalized for read-heavy workload; measure query performance difference ✅ (练习五)
- Simulate a network partition: show an AP system (eventual consistency) vs CP system (unavailable during partition) behavior ✅ (练习三)
- Index a 10M row table: measure B-tree write throughput vs LSM-tree (RocksDB) write throughput ✅ (练习六)
- B+ tree index vs no-index query latency ✅ (练习一)
- Row storage vs column storage aggregation query ✅ (练习二)
- Consistent hashing vs modulo hashing migration % ✅ (练习四)

**Source material to integrate:**
- P1 database basics (draft/prerequisites/database.md): relational theory, normalization, ACID
- P2 storage models & indexes (draft/prerequisites/storage-models-and-indexes.md): document/graph/time-series/vector models, B-tree, LSM-tree, NoSQL cases
- P3 distributed system (draft/prerequisites/distributed-system.md): replication, consistency models, CAP, consistent hashing
- C1 big-data-system-intro (published `data-platforms`): six design goals, five tradeoffs, Baidu Log case — keep this as the bridge from theory to practice
- C4 analytical storage (draft/data-systems/analytical-storage.md): row vs column, analytical workload characteristics

---

### Article 2: 数据系统的构成 (What Constitutes a Data System)

**Question:** What components make up a complete data system, and how do they work together?

**Coverage:**
- **Architecture layers deep dive:** source → collection → ingestion → transport → storage → compute → application, with concrete technology choices at each layer
- **Collection layer:** event schema design, tracking plans, SDK/log/CDC sources, identity resolution, timestamps, schema evolution
- **Ingestion and transport:** message queues (Kafka, Pulsar), delivery guarantees (at-most-once, at-least-once, exactly-once semantics), partitioning, ordering, replay, backpressure, offset management
- **Storage layer:** analytical storage patterns (row vs column, Parquet, ORC), partitioning strategies, small-file problem, compression, hot/cold tiers, storage/compute separation
- **Compute layer:** batch engines (Spark, Flink Batch), stream engines (Flink, Kafka Streams), query engines (Presto, ClickHouse), event time vs processing time, windows, state management, checkpoints
- **Warehouse and lakehouse:** raw/curated separation, data catalogs (Hive Metastore, AWS Glue), table formats (Iceberg, Delta Lake, Hudi), ACID on object storage, time travel, schema enforcement
- **Technology landscape:** where each tool fits (Kafka for transport, Spark for batch, Flink for stream, Iceberg for lakehouse, ClickHouse for OLAP, Snowflake for managed warehouse)
- **Lambda vs Kappa architecture:** batch + stream dual path vs stream-only with replayable log

**Visual elements:**
- **End-to-end architecture diagram:** all seven layers with concrete technologies annotated at each layer (e.g., Kafka at transport, Parquet at storage, Spark at compute)
- Event flow sequence diagram: user action → SDK → log → Kafka → S3 (raw) → Spark → Iceberg table → ClickHouse → BI tool, showing data transformations at each hop
- Storage layout comparison: row-oriented (OLTP, point queries) vs column-oriented (OLAP, aggregations) with access pattern illustrations
- Batch vs stream timeline: same dataset processed both ways, showing latency, throughput, state management differences
- Lambda architecture diagram: batch layer + speed layer + serving layer, with pros/cons table
- Kappa architecture diagram: single stream path with log replay, with pros/cons table
- Technology landscape matrix: rows = layers (collection, transport, storage, compute, query), columns = use cases (real-time, batch, interactive), cells show technology choices

**Practice anchors:**
- Design an e-commerce event schema (order_placed, item_added_to_cart); implement collection with duplicate/late/malformed event handling
- Set up Kafka topic with partitioning; simulate producer failure and consumer replay; measure exactly-once semantics
- Compare row storage (SQLite) vs columnar (Parquet via DuckDB) for the same aggregation query on 10M records; measure scan time and bytes read
- Build a mini batch+stream pipeline: batch computes daily aggregates, stream updates real-time; compare results and latency
- Trace an update through Iceberg: write → snapshot → metadata update → reader isolation

**Source material:**
- C1 architecture intro (published `data-platforms`): seven layers overview, Baidu Log case — use as the narrative spine
- C2 event design & collection (draft/data-systems/data-collection.md): tracking plans, schema, identity, collection boundaries
- C3 ingestion & transport (draft/data-systems/data-ingestion.md): Kafka mechanics, delivery guarantees, replay, deduplication
- C4 analytical storage (draft/data-systems/analytical-storage.md): row vs column, partitions, compression, hot/cold, storage/compute separation
- C5 batch & stream compute (draft/data-systems/batch-and-stream-processing.md): event/processing time, windows, state, checkpoints, engine comparison
- C6 warehouse & lakehouse (draft/data-systems/warehouses-and-lakehouses.md): raw/curated, catalogs, Iceberg/Delta/Hudi, ACID guarantees
- C13 cloud deployment (draft/data-systems/cloud-data-platforms.md): managed service landscape, Snowflake/Databricks/BigQuery positioning

---

### Article 3: 数据治理：分层、质量与元数据 (Data Governance: Layering, Quality, and Metadata)

**Question:** Why organize data in layers? How do we ensure data remains correct, discoverable, and trustworthy over time?

**Coverage:**
- **Philosophy of data layering:** why raw/ODS → DWD → DWS → ADS separation exists — isolation of concerns, reusability, blast radius control, debugging
- **Layering design patterns:** ODS/DWD/DWS/ADS as one choice (Kimball influence, common in Chinese big-data practice), raw/bronze → silver → gold (Databricks medallion), staging → core → mart (alternatives) — not prescriptive, but explain the *why* behind separation
- **Analytical data modeling:** fact grain (what does one row represent?), dimensions (attributes, hierarchies), slowly changing dimensions (SCD Type 1/2/3), wide tables vs normalized, star schema vs snowflake, when to denormalize
- **ETL/ELT and idempotence:** deterministic transforms, append vs upsert vs partition replacement, atomic publication, backfills, correction order, why upsert alone isn't idempotent
- **Metadata taxonomy:** technical (schema, lineage, partitions), business (metric definitions, ownership, glossary), operational (freshness, volume, quality scores)
- **Data lineage:** column-level vs table-level, forward (what breaks if I change this?) vs backward (where did this metric come from?), lineage graphs, impact analysis
- **Metric semantics:** definition (SQL + business logic), assumptions, grain, filters, ownership, versioning — why two analysts get different "revenue" numbers
- **Data quality dimensions:** accuracy, completeness, consistency, timeliness, validity, uniqueness — concrete definitions with failure examples
- **Quality contracts and validation:** schema enforcement, range checks, referential integrity, reconciliation (source vs target counts), quarantine, alerting
- **Incident handling:** detection → triage → upstream trace → quarantine bad data → repair → backfill → postmortem

**Visual elements:**
- **Layering architecture diagram:** raw → ODS → DWD → DWS → ADS, showing data transformations and quality gates at each boundary, with blast radius illustrated (a bug in DWD affects everything downstream)
- Comparison table: ODS/DWD/DWS/ADS vs bronze/silver/gold vs other patterns, with "when to use" guidance
- **Star schema diagram:** central fact table surrounded by dimension tables, with SCD Type 2 timeline illustration showing how historical attributes are preserved
- **ETL idempotence failure case:** same partition processed twice → double-counting, vs idempotent design with atomic replace
- **Lineage graph:** raw table → transform 1 → transform 2 → final metric, with column-level dependencies highlighted, showing break propagation
- **Metadata taxonomy matrix:** rows = metadata types (technical, business, operational), columns = examples, with use cases in cells
- **Data quality pyramid:** base = schema validity → referential integrity → business rules → freshness at top
- **Incident timeline:** anomaly detected (t0) → upstream trace (t1) → root cause identified (t2) → quarantine (t3) → repair (t4) → backfill (t5) → resolution (t6)
- **Metric definition card:** SQL + business logic + grain + filters + assumptions + owner + version, showing why standardization matters

**Practice anchors:**
- Design a three-layer model (raw → clean → aggregate) for e-commerce orders; inject an upstream schema change and trace the breakage downstream
- Model customer dimension with SCD Type 2; customer moves cities on 2024-06-15; show how a query for "June 2024 orders by city" behaves before/after the change
- Write an idempotent partition transform; run it twice; verify no double-counting (contrast with naive append or upsert)
- Define a metric ("monthly active users"); two analysts implement it; compare their SQL and identify where definitions diverge (timezone? deduplication? bot filtering?)
- Inject missing, duplicate, invalid, late data; detect with validation rules; show affected downstream tables; simulate quarantine and repair
- Trace a broken metric upstream through three transform layers using a lineage graph; identify the root cause table

**Source material:**
- C7 analytical modeling & layering (draft/data-systems/analytical-data-modeling.md): fact grain, dimensions, SCD, wide tables, ODS/DWD/DWS/ADS pattern, star schema
- C8 ETL & identity (draft/data-systems/etl-and-identity.md): ETL/ELT, deterministic transforms, idempotence, append/upsert/replace, backfills, identity mapping
- C9 metadata & lineage (draft/data-systems/metadata-and-lineage.md): technical/business/operational metadata, metric definitions, data dictionary, lineage graphs, column-level lineage, impact analysis
- C10 data quality & change management (draft/data-systems/data-quality.md): quality dimensions, contracts, validation, reconciliation, quarantine, freshness, incident handling, root-cause analysis
- C2 event design (draft/data-systems/data-collection.md): schema contracts, tracking plans — use as the *input* to the layering discussion
- Governance overview from data-governance.md (lines 1–64 in original): high-level motivation for why governance matters

---

### Article 4: 实践案例与运维扩展 (Case Studies and Operational Extensions)

**Question:** How do real systems implement these principles? What additional operational concerns arise at scale?

**Coverage:**
- **Case study 1: Baidu Log → UDW evolution** (expanded from C1): initial architecture (scripts + Hadoop), problems (no schema, no lineage, only reports), refactor (compute-centric → data-centric, layering introduced), results (reusable data, interactive queries), streaming addition (Dstream + Mola for real-time)
- **Case study 2: Sensors Data architecture** (if source material C2/C9 is sufficient): event collection at scale, schema evolution, metadata management, how they handle tracking plan changes across clients
- **Case study 3: Cloud migration economics**: on-prem Hadoop cluster → cloud-managed service (e.g., Snowflake or Databricks), cost breakdown (compute, storage, egress, staffing), when migration makes sense, when it doesn't
- **Case study 4: Open-source lakehouse stack**: end-to-end implementation with Kafka (transport) → Spark (batch ETL) → Iceberg (lakehouse) → Trino (query), architecture diagram, operational lessons, where it works well
- **Resource scheduling deep dive**: workflow orchestration (Airflow DAG readiness) vs resource allocation (YARN/Kubernetes quotas), why they're separate concerns, fairness vs priority, admission control, retry strategies
- **Lifecycle and recovery operations**: retention policies (legal, cost, performance), archival (hot → warm → cold → archive), dependency-aware cleanup (can't delete a table others depend on), backup strategies, restore rehearsals with RPO/RTO targets
- **Security and compliance in practice**: data classification (PII, sensitive, public), least-privilege access (role-based, row-level, column masking), tenant isolation in multi-tenant warehouses, encryption (at-rest, in-transit), audit logging, deletion propagation (from raw through all derived tables and backups)

**Visual elements:**
- **Baidu UDW evolution timeline**: 2008 (Log platform, scripts) → 2011 (5000 nodes, duplication problem) → 2012 (UDW, data-centric, layered) → streaming addition, with before/after architecture diagrams at each phase
- **Cloud migration cost breakdown**: bar chart comparing on-prem (hardware, staffing, maintenance) vs cloud (compute, storage, egress, contract), with total-cost crossover point
- **Open-source stack diagram**: full data flow from source to consumption, with technology choices annotated at each layer
- **Scheduling separation diagram**: Airflow (workflow DAG, task readiness) vs YARN/Kubernetes (resource manager, quotas, priorities), showing why they solve different problems
- **Retention lifecycle diagram**: hot (SSD, days) → warm (HDD, months) → cold (object storage, years) → archive (Glacier, legal hold) → delete, with cost and latency at each tier
- **Access control matrix**: rows = user roles (analyst, engineer, admin), columns = tables/operations, cells = allow/deny, with row-level and column-masking examples
- **Deletion propagation graph**: raw event → staging → curated → aggregates → backups, showing cascading delete with compliance requirements

**Practice anchors:**
- Cost comparison: size a workload (TB, queries/day, users), estimate on-prem vs cloud costs, identify the crossover point
- Build a mini lakehouse: ingest CSV → Spark writes Parquet → Iceberg table → Trino query, measure time-travel query performance
- Simulate resource contention: two workflows competing for quota, measure queue wait times under different priority settings
- Run a cleanup dry-run: identify tables older than retention policy, check dependencies, report what would be deleted
- Design an access matrix for multi-tenant analytics: users from Tenant A cannot see Tenant B's data, admins see all, analysts see aggregates only; write a query that gets denied
- Trace a delete: delete one raw event, propagate through derived tables, verify it's gone from backups

**Source material:**
- C1 Baidu case (published `data-platforms`): already has the basic narrative, expand with more architectural detail and lessons learned
- C2 event collection (draft/data-systems/data-collection.md): Sensors Data case if sufficient detail exists
- C13 cloud deployment (draft/data-systems/cloud-data-platforms.md): managed service landscape, cost model, migration decisions, China market case (lines 90–169 cover deployment decisions)
- C11 resource scheduling (draft/data-systems/resource-scheduling.md): workflow vs resource allocation separation, fairness, quotas, priorities, retries
- C12 lifecycle & recovery (draft/data-systems/data-lifecycle-and-recovery.md): retention, archival, cleanup, backups, restore procedures, RPO/RTO
- C14 security & compliance (draft/data-systems/data-security-and-compliance.md): classification, least privilege, tenant isolation, encryption, audit, deletion propagation
- Original cloud.md lines 1–89 (lesson 07, cloud concepts): foundational cloud-native concepts if not already covered in C13

---

## 4. Migration from 14 chapters to 3–4 articles

> Superseded on 2026-10-21. The table below was the planned consolidation; where blocks actually landed differs (C4–C6 went to Article 2, C7–C10 to Article 3, C11–C14 to Article 4, P1–P3 to Article 1 instead of the English Stage 2 lessons). The actual placement is in §6.

| Old 14-chapter plan | New consolidation |
|---|---|
| C1 architecture & tradeoffs | ✅ Article 1 (already written, expand in place or integrate) |
| C2 event design & collection | → Article 2 §1 |
| C3 ingestion & transport | → Article 2 §2 |
| C4 analytical storage | → Article 1 (storage layer section) |
| C5 batch & stream compute | → Article 1 (compute layer section) |
| C6 warehouse/lakehouse | → Article 1 (storage layer section) |
| C7 analytical modeling | → Article 2 §3 |
| C8 ETL & identity | → Article 2 §4 |
| C9 metadata & lineage | → Article 2 §5 |
| C10 data quality | → Article 3 §1 |
| C11 resource scheduling | → Article 3 §2 |
| C12 lifecycle & recovery | → Article 3 §3 |
| C13 cloud deployment | → Article 1 (deployment section) or Article 4 |
| C14 security & compliance | → Article 3 §4 |

Prerequisites (P1–P3: database, storage models, distributed-system consistency) still integrate into their existing Stage 2 canonical lessons as originally planned.

## 4. Phase A — completed 2026-10-20

Current working structure:

```text
draft/
├── PLAN.md
├── reorganization-map.json      # Source sections, destinations, and hashes
├── reorganization-audit.json    # Verification results
├── data-systems/                 # The 14 chapter files listed above
├── prerequisites/
│   ├── database.md
│   ├── storage-models-and-indexes.md
│   └── distributed-system.md
└── review/
    └── ai-storage-updates.md
```

These are working manuscripts. `prerequisites/` holds material to integrate into existing lessons, not a second published version. The review file preserves commentary whose claims or ownership need review. Do not create empty chapter stubs; create a file when it receives material.

### A1. Record the baseline

The execution baseline matched the planning inventory: all nine original sizes and SHA-256 hashes were unchanged. The [move map](reorganization-map.json) records each original path, hash, byte count, line count, and section boundaries.

For section splits, the map records **old path + line span + section heading → new path + source-block marker**, with a hash and byte count of the extracted text. Each start marker is followed by a newline, the exact number of payload bytes, another newline, and the end marker. Titles, dates, and source labels sit outside the payload, allowing exact reconstruction even when an original lacked a final newline.

### A2. Move source blocks to their chapter homes

The following spans refer to the original files inspected on 2026-10-20. All have been moved; they cover every original line, including summary wrappers and blank lines. Source boundaries and reconstruction were checked before removing the old paths.

`C1`–`C14` refer to the filenames in the chapter table. `P1` = `prerequisites/database.md`; `P2` = `prerequisites/storage-models-and-indexes.md`; `P3` = `prerequisites/distributed-system.md`; `R` = `review/ai-storage-updates.md`.

| Original file | Source blocks → destinations |
| --- | --- |
| `big-data-system-intro.md` | Lines 1–48 → C1. |
| `big-data-system-design.md` | 1–85 ingestion/transport → C3; 86–180 compute selection → C5. |
| `data-collection.md` | 1–53 tracking → C2; 54–106 collection → C2; 107–153 metadata → C9; 154–183 layering → C7; 184–194 combined summary/questions → C9; 195–268 modeling → C7. |
| `data-storage.md` | 1–25 database basics → P1; 26–80 alternative data models → P2; 81–93 relational theory/normalization → P1; 94–171 NoSQL and search/geospatial/persistence cases → P2; 172–226 “2026 update” → R. |
| `data-storage-2.md` | 1–137 replication/consistency/hashing/CAP → P3; 138–156 cloud consistency commentary → C13; 157–233 analytical storage → C4. |
| `dw.md` | 1–107 warehouse/lake/lakehouse → C6; 108–166 metadata → C9; 167–205 layering → C7; 206–221 combined summary/questions → C9; 222–363 modeling → C7; 364–523 ETL → C8. |
| `data-governance.md` | 1–64 governance overview → C10 as orientation material; 65–201 quality → C10; 202–306 lineage → C9. |
| `platform-governance.md` | 1–175 housekeeping → C12; 176–364 security/compliance → C14; 365–501 resource scheduling → C11. |
| `cloud.md` | 1–89 cloud concepts (lesson 07) → C13; 90–169 deployment decisions (lesson 08) → C13, preserving their separate source labels. |

Each receiving file has a clear title, a `Last updated` date near the top, source-block labels, and links to this plan and the move record. The two summaries of lessons 11 and 12 are labeled by their original filenames, with the fuller `dw.md` material placed first.

Near-duplicates remain together as labeled alternatives for Phase B. Each source block appears once. All nine originals were reconstructed and matched byte-for-byte before their old paths were removed; there are no editable copies at those paths.

### A3. Check the reorganization

- Every original line belongs to exactly one of 31 recorded source blocks, and every block has exactly one destination.
- Hashes match for all relocated payloads and all nine reconstructed originals: **2,454 lines / 334,655 original bytes preserved**.
- All 18 receiving files contain source material. Repeated summaries remain identifiable; no example or question was removed.
- This plan's inventory and chapter links point to the current files. The imported bodies contain no Markdown links or local asset references requiring relocation.
- `.vitepress/config.mts` now excludes `draft/**/*.md`. Drafts remain outside both publication manifests.
- The existing test suite passes: **13/13**. The standard validator reports two unavailable Chinese article links; a direct VitePress build reports eight dead-link occurrences across five existing Quick Start pages. All affected pages, the validator, and navigation manifest match the pre-Phase-A baseline. These unrelated links were left unchanged.
- A separate verification build succeeds with an in-memory allowlist limited to those existing broken link targets. Its 126 page entries, generated HTML paths, three local-search indexes, and sitemap contain no draft pages. The allowlist was not saved to project configuration.

**Phase A is complete.** The [audit report](reorganization-audit.json) records the preservation checks, repository checks, and site-build verification. Rewriting, fact-checking, deduplication, and publication remain Phase B work.

## 5. Phase B — rewrite and enhance (absorption complete 2026-10-21; see §6)

**Goal:** Turn the imported summaries into in-depth Stage 2 topic articles with multi-angle coverage, visual displays, and working examples. No information reduction — enhance with mechanisms, diagrams, practice anchors, and connections.

### B1. Article structure contract

Each rewritten article should contain:

1. One core question, prerequisites (link to Stage 1 or existing Stage 2 lessons), and an observable learning objective
2. Multiple angles of coverage: theory → history/evolution → decision frameworks → concrete systems/tools → practice
3. Visual elements: architecture diagrams, comparison tables, decision trees, timelines, flow diagrams (use Mermaid where appropriate)
4. Concrete mechanisms with assumptions: not “Kafka is for transport” but “Kafka provides durable partitioned logs; acknowledgments separate delivery from business effects; offset commits enable replay”
5. Runnable practice anchors with inputs, environment, expected results, and failure cases
6. Source attribution and links to prerequisites and related articles

### B2. Writing order

| Order | Work | Completion check |
| --- | --- | --- |
| 1 | Article 1 foundations | Database history timeline, CAP deep-dive with partition scenarios, database decision tree, ACID vs BASE comparison, index diagrams (B-tree vs LSM), practice anchors run and verify |
| 2 | Article 2 systems | End-to-end architecture diagram, event flow sequence, storage layout comparison, batch vs stream timeline, Lambda/Kappa diagrams, technology landscape matrix, practice anchors for collection/Kafka/Parquet/batch+stream/Iceberg |
| 3 | Article 3 governance | Layering philosophy with blast-radius diagram, star schema with SCD timeline, ETL idempotence failure case, lineage graph with column-level dependencies, metadata taxonomy, quality pyramid, incident timeline, metric definition card, practice anchors for modeling/ETL/lineage/quality |
| 4 | Article 4 case studies | Baidu evolution timeline with before/after diagrams, cloud migration cost breakdown, open-source stack diagram, scheduling separation, retention lifecycle, access control matrix, deletion propagation graph, practice anchors for cost comparison/lakehouse/scheduling/cleanup/access control |

### B3. Enhancement priorities

**Add missing mechanisms** (moved from component lists to behavior explanations):
- Collection: log/API/CDC examples, snapshot-to-CDC handoff, source offsets, schema evolution, user vs device identity
- Delivery: separate delivery guarantees from business effects, acknowledgments, ordering scope, retention, offset commits, deduplication horizons, poison records, exactly-once sink conditions
- Compute: event time, watermarks, windows, state/checkpoint recovery, late-result correction
- Modeling: fact grain before table shape, event-time vs current attributes, SCD types, metric semantics
- ETL: why upsert alone isn't idempotent, partial writes, atomic publication, correction order, deterministic backfills
- Metadata: schema catalog vs metric semantics vs dataset lineage vs record-level provenance
- Operations: workflow scheduling vs resource scheduling, replication vs backups, retention vs deletion obligations, restore validation

**Resolve contradictions** (from B4 in original plan — fact-check before using):
- CAP: define failure model and operation guarantees, separate CAP availability from uptime/latency SLOs, explain tradeoff during partition (not “three choose two” with fixed CP/AP labels)
- Consistency: give ACID consistency, replica consistency, transaction isolation, 2PC, consensus each a separate definition and counterexample
- Eventual consistency: state convergence assumptions, distinguish from bounded staleness and cache-refresh policy (not “fixed time guarantee”)
- Cloud examples: check current AWS/GCP/Azure documentation before citing S3 consistency or DynamoDB behavior
- Storage taxonomy: separate logical data model, physical layout, access API, deployment architecture (don't mix HBase wide-column, analytical columnar, object storage, object databases)
- Prescriptive patterns: explain lakehouse guarantees and show design choices with simpler alternatives (not “lakehouse requires one engine”); treat ODS/DWD/DWS/ADS as one pattern among several
- Unsourced claims: source/date with context, replace with reproducible measurements, or omit (“80% of performance problems”, fixed throughput/compression numbers, cost ratios, market forecasts)
- Legal rules: specify purpose, authorization, jurisdiction, exceptions; separate engineering controls from legal conclusions (not “collect everything” or universal explicit-consent)
- AI predictions: keep only relevant storage mechanisms supported by evidence; retain speculative “2026 updates” in review until validated

### B4. Visual element standards

- Architecture diagrams: seven-layer flow with concrete technology names, not generic boxes
- Comparison tables: equal treatment of alternatives, explicit “when to use” column
- Decision trees: concrete branching criteria with thresholds (not “it depends”)
- Timelines: real dates for historical evolution, relative timestamps for incident sequences
- Code examples: match the book's existing Python/SQL style, include failure cases not just happy path
- Mermaid diagrams: use for flows, sequences, state machines; export to SVG for complex architecture

### B5. Promotion into the book

Promotion follows rewriting and verification, one article at a time:

1. Prerequisites (P1–P3) integrate into existing Stage 2 canonical lessons (`database`, `distributed-system`) with their stable IDs preserved
2. Move finished Chinese article to `zh/book/02-topics/08-data/` (or keep Article 1 in Stage 3 if the architecture-intro positioning works better there)
3. Update `.vitepress/book-data.json` and `collections/book.yml` together; declare `zh` in navigation and `zh-CN` in portable metadata
4. Add English translations when ready (not required for Phase B completion)
5. Remove promoted working body from `draft/data-systems/`; keep move record and this plan as editorial history
6. Run practice anchors, `npm test`, and `npm run docs:build`; check navigation, links, diagrams

**No commit, push, or deployment is part of this plan.** The repository already contains substantial uncommitted reorganization work.

## 6. Phase B absorption record — 2026-10-21

### 6.1 The five articles and how they relate

All seven live in `zh/book/02-topics/08-data/` and appear in navigation in this order (`collections/book.yml` orders 2039–2045). **Case split (2026-10-21):** long company cases were moved out of A2–A4 into A5 so the mechanism articles stay concept-first; A4 was renamed 数据平台运维.

| Order | File | Question it answers | Lines |
|---|---|---|---|
| 0 · 导读 | `data-platforms.md` | Which six design goals and five tradeoffs frame every later choice, and where is each explained? | 140 |
| 1 | `database-and-bigdata.md` | Why did each generation of storage system appear, and which assumption failed at the next scale? | 1312 |
| 2 | `data-systems.md` | How does one event travel through collection → ingestion → transport → storage → compute → warehouse/lakehouse? | 1692 |
| 3 | `data-governance.md` | Why does one metric produce two numbers, and how do layering, modeling, ETL, metadata, lineage and quality keep data correct? | 1769 |
| 4 | `data-operations.md` | What do cloud deployment, scheduling, lifecycle and security add once a system is in production? | 1098 |
| 5 | `industry-cases.md` | Why did Alibaba, ByteDance, Tencent, Baidu and Huawei build such different data platforms, how does each product map back to A1–A4 mechanisms (vs Google/AWS), where do they stand in 2026, and how do real companies evolve? | 735 |
| 6 | `data-engineer-roadmap.md` | What should a data engineer learn, use, and track to become an expert, and how do they keep up with vendor change? | 292 |

The dependency runs one way: each article uses the previous one's vocabulary (A1 *why* → A2 *how it works* → A3 *how it stays correct* → A4 *how it survives years of operation*). Backward references are wiki-link bridges of at most one paragraph. The English `en/book/02-topics/08-data/data-platforms.md` was moved but not rewritten; it still carries the older all-in-one overview.

### 6.2 Canonical homes

| Topic | Home | Others keep |
|---|---|---|
| Storage history, relational theory, normalization, ACID, indexes, data-model taxonomy, replication, consistency models, CAP/BASE, 2PC vs consensus, consistent hashing, storage 不可能三角, why theory matters on managed cloud | A1 | One-paragraph bridge + `[[数据库基础与大数据演进]]` |
| Seven layers, collection, ingestion, Kafka, analytical-storage mechanism, hot/warm/cold media, compute engines, event time and watermarks, warehouse/lake/lakehouse and Iceberg internals, Lambda/Kappa, 神策 storage-migration and compute-selection cases | A2 | `[[数据系统的构成]]` |
| Layering, dimensional modeling, SCD, ETL/ELT and idempotence, ID-Mapping, metadata, metric definitions, lineage, data quality, tracking-plan management | A3 | `[[数据治理]]` |
| Cloud-native levels and deployment decisions, elastic break-even, open-source stack integration, resource scheduling, lifecycle/backup/recovery, security and compliance | A4 | `[[数据平台运维]]` |
| Big-tech platform comparison (history, product matrix mapped to the seven layers, kernel-origin × delivery-mode grid, six questions to dissect a product, Google/AWS comparison, 2026 market shares by measurement basis, open-source legacy, AI-era shifts); full company cases: Baidu Log→UDW, 神策 ten years, mid-size storage upgrades, bank scheduling, zombie-asset cleanup, CDP lineage | A5 | `[[大厂数据平台与实践案例]]` |
| Expert definition and six-level ladder, three knowledge layers by half-life, skill priorities, source-reading entry points, scenario-based platform choice, announcement-to-mechanism translation, personal tech radar, 12-month plan, career tracks | A6 | `[[数据工程师的成长地图]]` |
| Series map, six design goals, five tradeoffs with their preconditions, application-exit types (UI / OpenAPI / MCP) | 导读 | `[[数据平台]]` |

### 6.3 Block ledger

| Article | Source blocks absorbed |
|---|---|
| A1 | `data-storage-1-25`, `data-storage-26-80`, `data-storage-81-93`, `data-storage-94-171`, `data-storage-2-1-137`, `data-storage-2-138-156`; mechanisms only from `data-storage-172-226` (rest kept in `review/ai-storage-updates.md`) |
| A2 | `data-collection-1-53`, `data-collection-54-106`, `big-data-system-design-1-85` (except §7 security → A4), `big-data-system-design-86-180`, `data-storage-2-157-233`, `dw-1-107` |
| A3 | `dw-108-166`, `dw-167-205`, `dw-206-221`, `dw-222-363`, `dw-364-523`, `data-governance-1-64`, `data-governance-65-201`, `data-governance-202-306`; the `data-collection.md` duplicates of lessons 11–12 (`-107-153`, `-154-183`, `-184-194`, `-195-268`) merged into the fuller `dw.md` versions |
| A4 | `platform-governance-1-175`, `platform-governance-176-364`, `platform-governance-365-501`, `cloud-1-89`, `cloud-90-169`, `big-data-system-intro-1-48` (Baidu case; design goals and tradeoffs → 导读) |

### 6.4 Deliberately not carried over

- TLDR, 详细总结 and 课程总结 wrappers; role-by-role advice without a unique point; repeated lesson summaries.
- Trend forecasts and predictions (cloud-native/edge/AI-ops trends, Forrester and Gartner forecasts, AI scheduling and housekeeping predictions).
- Third-party statistics without a verifiable source (Gartner 40%/70% data-quality figures, "80% of performance problems", fixed compression and throughput ratios, several cost multiples). Practitioner numbers from 曹犟/神策/百度 are kept with attribution.
- Errors corrected in the sources: fixed CP/AP labels and "三选二"; eventual consistency as a time guarantee; modulo-hash movement (≈83%, not 96.7%); Redis Cluster hash slots; "upsert 天然幂等"; drop-then-append as atomic; DAMA-DMBOK2 area count; a blanket explicit-consent rule; Iceberg commit via object-storage conditional put.

### 6.5 Verification on 2026-10-21

- Each article's runnable Python/SQL exercises were executed in disposable `uv` environments and their printed outputs match the text; Spark, Kafka and Flink snippets are marked as requiring that stack.
- All 28 Mermaid diagrams parse with the repository's mermaid 11.16.0.
- Spot-checked against primary sources: the Google I/O 2009 replication table (throughput row added), Iceberg `load(catalog.db.table)` and millisecond `as-of-timestamp`, `iceberg-spark-runtime-3.5_2.12:1.6.1`, Inmon 1992 (QED), Kimball SCD Types 0–7 (Type 4 corrected to mini-dimension), Spark dynamic partition overwrite, DynamoDB index quotas, the dbt project-structure guide.
- A paragraph-level similarity scan found no near-duplicate paragraphs across the five articles.
- `npm test` passes; `node scripts/validate-book.mjs` reports only the two pre-existing broken links in `zh/book/01-quick-start/01-computing/internet-and-web.md`.

### 6.6 Open items

1. Translate the six new articles to English, and rewrite `en/.../data-platforms.md` as the English series overview.
2. Verify the review queue in `review/ai-storage-updates.md` and settle RAG / agent-memory ownership with the sibling repositories.
3. Run the Spark/Iceberg, Kafka and Flink exercises on a real stack.
4. Open each article in the dev server once to confirm Mermaid rendering and table layout in both themes.
5. A1 attributes several first-hand anecdotes and the Weibo/Twitter MySQL usage to the course; they remain unverified beyond that attribution.
6. A5's market shares, product matrix and Google/AWS product names, and A6's conference calendar, are dated (as of 2026-10). Several were renamed in 2026 (BigLake → Lakehouse, Dataplex Universal Catalog → Knowledge Catalog, Dataproc → Managed Service for Apache Spark). Re-check them before each publication, especially Tencent's 2026-10-29 conference and any new IDC big-data-platform edition. Each figure is already marked 官方 / 媒体 / 厂商宣称.
