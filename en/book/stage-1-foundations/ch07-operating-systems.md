Last updated: 2026-08-08

# Ch 7 · Operating Systems: Three Fundamental Abstractions

> **Stage**: 第一阶 · Foundations (L5 → L4) | **Pillar**: Systems Thinking

## Core Question

What guarantees does the OS give to programs?

## Soul Insight

The OS is a lie — a benevolent one. It tells every process "you have the whole machine." Processes, virtual memory, and the file system are the three fundamental abstractions that make this lie possible. Without them, programming would require negotiating with hardware constantly.

## Concepts

- **Process**: isolated execution unit; scheduler as resource allocator
- **Virtual memory**: every process thinks it owns address space 0–max; page tables as the translation layer
- **File system**: named, persistent byte sequences; inodes as the real address
- **System calls**: the boundary between user space and kernel space
- Context switching cost and why it matters for performance

## Practice Anchor

```bash
strace python3 -c "print('hello')"
```
Observe every system call a trivial program makes. Map each call to: process management, memory, or I/O.

## Status

> Existing Linux notes cover much of this material. See related notes.

## Related Notes

- [Linux Overview](../03-systems-and-data/01-operating-systems-and-linux/linux-overview) — existing overview
- [Linux Notes](../03-systems-and-data/01-operating-systems-and-linux/linux-notes) — detailed Linux notes
- [File System](../03-systems-and-data/01-operating-systems-and-linux/file-system) — file system deep dive
- [Shell](../03-systems-and-data/01-operating-systems-and-linux/shell) — shell and process interaction
