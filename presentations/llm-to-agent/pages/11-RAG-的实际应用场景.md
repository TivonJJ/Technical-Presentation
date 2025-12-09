---
layout: default
---

# RAG 的实际应用场景

<div class="grid grid-cols-2 gap-8 mt-12">

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card p-6 bg-green-500/5">
  <h3 class="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
    <carbon-checkmark-filled /> 适合的场景
  </h3>
  <ul class="space-y-3 text-sm opacity-90 list-none">
    <li class="flex items-start gap-2">
      <carbon-checkmark-filled class="mt-0.5 text-green-500/50 flex-shrink-0" />
      <span>知识库问答（FAQ、文档检索）</span>
    </li>
    <li class="flex items-start gap-2">
      <carbon-checkmark-filled class="mt-0.5 text-green-500/50 flex-shrink-0" />
      <span>AI 客服系统</span>
    </li>
    <li class="flex items-start gap-2">
      <carbon-checkmark-filled class="mt-0.5 text-green-500/50 flex-shrink-0" />
      <span>SDK 文档 + Demo 代码生成</span>
    </li>
    <li class="flex items-start gap-2">
      <carbon-checkmark-filled class="mt-0.5 text-green-500/50 flex-shrink-0" />
      <span>跨语言代码生成</span>
    </li>
  </ul>
</div>

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card p-6 bg-red-500/5">
  <h3 class="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
    <carbon-close-filled /> 不适合的场景
  </h3>
  <ul class="space-y-3 text-sm opacity-90 list-none">
    <li class="flex items-start gap-2">
      <carbon-close-filled class="mt-0.5 text-red-500/50 flex-shrink-0" />
      <span>需要明确 Action 的严谨场景</span>
    </li>
    <li class="flex items-start gap-2">
      <carbon-close-filled class="mt-0.5 text-red-500/50 flex-shrink-0" />
      <span>实时系统操作</span>
    </li>
    <li class="flex items-start gap-2">
      <carbon-close-filled class="mt-0.5 text-red-500/50 flex-shrink-0" />
      <span>精准的代码定位与修改</span>
    </li>
  </ul>
</div>

</div>

<div v-click 
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
  class="mt-8 p-4 bg-blue-500/10 rounded-lg text-sm">
  <div class="flex items-start gap-3">
    <carbon-idea class="text-blue-400 text-xl mt-1" />
    <div>
      <strong class="text-blue-300">演进案例：</strong> 早期版本的 Cursor、Copilot 等AI ID的 Code Indexing 基于 RAG，但代码生成质量不高且幻觉多。
      后来 Anthropic 在 Coding Agent 中改用 <span class="text-green-400 font-mono">search</span> / <span class="text-green-400 font-mono">grep</span> 等工具精准定位代码（模拟人类开发路径），
      现在市面上的 AI Coding Agent 都采用这种模式，精准度大幅提升。
    </div>
  </div>
</div>
