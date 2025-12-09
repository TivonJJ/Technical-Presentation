---
layout: default
---

# GraphRAG
<div class="text-sm opacity-60 mb-8">传统 RAG 的结构性升级</div>

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="glass-card p-6 border-l-4 !border-l-red-500/50">
  <h3 class="text-lg font-bold text-red-300 mb-4 flex items-center gap-2">
    <carbon-warning /> 传统 RAG 的问题
  </h3>
  <ul class="space-y-2 text-sm opacity-80">
    <li>• 切片 → 嵌入 → 语义检索</li>
    <li>• 丢失结构、依赖、层级关系</li>
    <li>• 只能"一跳检索"</li>
    <li>• 无法理解实体间关系</li>
  </ul>
</div>

<div class="glass-card p-6 border-l-4 !border-l-green-500/50 bg-green-500/5">
  <h3 class="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
    <carbon-network-3 /> GraphRAG 的优势
  </h3>
  <ul class="space-y-2 text-sm opacity-80">
    <li>• 抽取实体（Entity）与关系（Relation）</li>
    <li>• 构建知识图谱</li>
    <li>• 支持多跳推理</li>
    <li>• 更精准召回</li>
  </ul>
</div>

</div>

<div class="mt-8 glass-card !p-0 overflow-hidden text-sm">

| 能力 | 传统 RAG | GraphRAG |
|------|---------|----------|
| **理解结构关系** | <span class="text-red-400">❌</span> | <span class="text-green-400">✔</span> |
| **多跳推理** | <span class="text-red-400">❌</span> | <span class="text-green-400">✔</span> |
| **长文档稳定性** | <span class="text-yellow-400">中等</span> | <span class="text-green-400">高</span> |
| **召回精准度** | <span class="text-red-400">容易有噪声</span> | <span class="text-green-400">显著提升</span> |
| **适用场景** | FAQ、短文档 | 复杂文档、系统依赖、技术知识库 |

</div>

<!--
我们刚刚提到传统 RAG 最大的问题之一，就是"语义切片之后，上下文关系被打断"。
RAG 能找到相关内容，但并不理解文档结构、实体关系、引用链，也无法执行多跳推理。
GraphRAG 解决的，就是传统 RAG 的"结构性缺陷"。

GraphRAG 通过构建知识图谱，让模型不仅能找到相关内容，还能理解内容之间的关系。
这对于复杂文档、技术知识库、系统依赖分析等场景特别有用。
-->
