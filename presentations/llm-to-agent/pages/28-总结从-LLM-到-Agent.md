---
layout: default
---

# 总结：从 LLM 到 Agent

<div class="flex flex-col gap-4 mt-8">

<div v-click class="glass-card p-4 flex items-center gap-6">
  <div class="font-bold w-32 text-right text-gray-400">LLM</div>
  <div class="h-8 w-[2px] bg-gray-700"></div>
  <div class="opacity-80">大脑，负责推理与生成</div>
</div>

<div v-click class="glass-card p-4 flex items-center gap-6">
  <div class="font-bold w-32 text-right text-blue-400">Context</div>
  <div class="h-8 w-[2px] bg-blue-500/50"></div>
  <div class="opacity-80">决定模型能理解什么，AI 应用的地基</div>
</div>

<div v-click class="glass-card p-4 flex items-center gap-6">
  <div class="font-bold w-32 text-right text-green-400">RAG / GraphRAG</div>
  <div class="h-8 w-[2px] bg-green-500/50"></div>
  <div class="opacity-80">解决知识更新与结构理解</div>
</div>

<div v-click class="glass-card p-4 flex items-center gap-6">
  <div class="font-bold w-32 text-right text-purple-400">Tools / MCP</div>
  <div class="h-8 w-[2px] bg-purple-500/50"></div>
  <div class="opacity-80">手脚，让模型拥有"行动能力"</div>
</div>

<div v-click class="glass-card p-4 flex items-center gap-6 bg-gradient-to-r from-orange-500/10 to-transparent">
  <div class="font-bold w-32 text-right text-orange-400 text-xl">Agent</div>
  <div class="h-8 w-[2px] bg-orange-500"></div>
  <div class="flex flex-col gap-1">
    <div class="font-bold">自主规划 + 决策 + 任务执行</div>
    <div class="text-[10px] opacity-60 font-mono">
      Agent = LLM（推理） + 长短期记忆（context / RAG） + 工具调用（MCP） + 自主性（planning / reflection）
    </div>
  </div>
</div>

</div>
