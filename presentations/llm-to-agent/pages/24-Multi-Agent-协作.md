---
layout: default
---

# Multi-Agent 协作

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="space-y-4">
  <div class="glass-card p-3 flex items-center gap-3">
    <div class="p-2 bg-blue-500/20 rounded text-blue-400"><carbon-search /></div>
    <div>检索专家<div class="text-xs opacity-50">Researcher</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3">
    <div class="p-2 bg-yellow-500/20 rounded text-yellow-400"><carbon-edit /></div>
    <div>写作专家<div class="text-xs opacity-50">Writer</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3">
    <div class="p-2 bg-green-500/20 rounded text-green-400"><carbon-checkmark-outline /></div>
    <div>审核专家<div class="text-xs opacity-50">Reviewer</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3">
    <div class="p-2 bg-purple-500/20 rounded text-purple-400"><carbon-document /></div>
    <div>格式化专家<div class="text-xs opacity-50">Formatter</div></div>
  </div>
</div>

<div class="glass-card p-4 flex items-center justify-center bg-black/40">
  <img src="/imgs/agent-working.gif" class="rounded shadow-2xl max-h-64" />
</div>

</div>

<div class="mt-6 flex items-center justify-center gap-2 text-sm opacity-70">
  <carbon-network-4 /> Agent to Agent (A2A) Protocol 
</div>

<!--
随着任务越来越复杂，我们开始使用 Multi-Agent ——
让多个 Agent 分工协作，像一个组织一样工作。

例如一个文档生成任务可能包含：
- 负责检索的 Agent
- 负责总结的 Agent
- 负责格式化的 Agent
- 负责检查质量的 Agent

他们之间通过协议协调工作。
-->
