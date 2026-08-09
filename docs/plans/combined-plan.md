# 书籍结构整合方案

> Last updated: 2026-08-09

## 问题诊断

**根因：** `book-data.json` 中 Stage 1–3 和 Web Extensions 的所有 section 条目缺少 `"languages"` 字段。`book.ts` 的逻辑是 `languages ?? ['en']`——默认英文，导致 VitePress 去找 `/en/book/stage-1-foundations/...`（不存在），前端显示空页面或404。

**已修复：** 为所有34个新章节条目添加了 `"languages": ["zh"]`（2026-08-09）。

---

## 架构决策：两层结构

`book-data.json` 的两层设计是正确的，保留：

```
book-data.json
├── Stage 1: Foundations (01)   ← 新课程 Ch 1–10，需要写
├── Stage 2: Advanced (02)      ← 新课程 Ch 11–20，需要写
├── Stage 3: Expert (03)        ← 新课程 Ch 21–31，需要写
├── Web Extensions (W)          ← SE路线扩展，可选，需要写
└── Reference Notes (R)         ← 旧笔记，已有内容，保持不动
```

**两层的职责区分：**
- **新课程章节**：概念型章节，回答"为什么"，有灵魂洞见，按 `book-idea.md` 模板写
- **参考笔记**：详细参考资料，查阅用，旧有内容继续积累

---

## 文件路径约定

新章节的物理文件路径：

```
zh/book/stage-1-foundations/ch01-algorithms.md
zh/book/stage-1-foundations/ch02-types-and-representation.md
...
zh/book/stage-2-advanced/ch11-algorithm-design.md
...
zh/book/stage-3-expert/ch21-complexity.md
...
```

旧笔记路径不变（`zh/book/01-foundations/...` 等）。

---

## 现有文件与新结构的对应

| 已有文件（参考笔记） | 对应新课程章节 | 关系 |
|---|---|---|
| `git/git.md` | Ch 10 · 工具链 | git 深度参考 → Ch10 交叉引用 |
| `operating-systems.md` | Ch 7 · 操作系统 | OS 深度参考 → Ch7 交叉引用 |
| `linux-debugging.md` | Ch 7 · 操作系统 | 调试实践 → Ch7 实践锚点 |
| `networks.md` | Ch 15 · 网络与协议 | 网络深度参考 → Ch15 交叉引用 |
| `programming-tools.md` | Ch 10 · 工具链 | 工具地图 → Ch10 交叉引用 |
| `computer-systems.md` | Ch 6 · 程序如何运行 | 系统概览 → Ch6 背景 |

交叉引用写法（在新章节末尾）：
```markdown
## 深度参考
- [Git 详解](../../reference/environment-and-tools/git/git.md) — 版本控制完整指南
```

---

## 写作优先级

按"参考材料已有 → 概念章最好写"排序：

1. **Ch 10 · 工具链**（git.md 已完成，最容易起笔）
2. **Ch 7 · 操作系统三个抽象**（operating-systems.md 已有）
3. **Ch 15 · 网络与协议**（networks.md 已有）
4. **Ch 1 · 从问题到算法**（无参考材料，但是全书入口，优先级高）
5. **Ch 6 · 程序如何运行**（computer-systems.md 已有）

之后按 Stage 1 → Stage 2 → Stage 3 顺序推进。

---

## 每章写作模板（来自 book-idea.md）

```markdown
# Ch N · 标题

> 核心问题：这章回答什么本质问题？

## 灵魂洞见
一个让读者"哦，原来如此"的 insight。

## 概念建构
最小必要的概念体系。

## 实践锚点
用什么代码/系统说明。

---

## 深度参考
- [相关参考笔记](../../reference/...) — 一行描述
```

---

## 当前状态快照

| 条目 | 状态 |
|---|---|
| `book-data.json` languages 修复 | ✅ 已完成（2026-08-09） |
| Stage 1–3 sidebar 显示 | ✅ 修复后可见（zh路径） |
| 参考笔记内容 | ✅ 部分已有，继续积累 |
| 新课程章节文件 | ⏳ 待写（无任何 chXX.md 文件） |
| 章节目录 `zh/book/stage-*/` | ⏳ 待创建 |
