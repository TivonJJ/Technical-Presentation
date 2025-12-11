---
layout: default
---

# MCP & Function Calling

<div class="mt-12 glass-card !p-0 overflow-hidden text-sm">

| 特性 | Function Calling | MCP |
|------|-----------------|-----|
| **本质** | <span class="text-blue-400">LLM 能力</span> (如何调用) | <span class="text-purple-400">生态协议</span> (如何接入) |
| **执行者** | LLM Client Runtime | Independent MCP Server |
| **复用性** | 单一应用内 | **跨模型、跨应用共享** |
| **关系** | 消费端 | 供应端 |
| **位置** | 推理链内部 | 工具生态层 |

</div>

<div class="mt-8 p-4 bg-blue-500/10 rounded-lg flex items-center gap-4">
  <carbon-idea class="text-blue-400 text-xl" />
  <span>它们并非二选一，而是互补：LLM 通过 Function Calling 能力去调用 MCP Server 提供的工具。</span>
</div>
