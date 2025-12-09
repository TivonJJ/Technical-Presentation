---
layout: default
---

# RAG 是什么？

<div v-click 
  v-motion
  :initial="{ opacity: 0, y: -30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
  class="mt-6 mb-8 text-2xl text-center opacity-80 font-light">
  让大模型在回答之前先<span class="text-green-400 font-bold">"查资料"</span>
</div>

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card p-6 border-t-4 !border-t-red-500">
  <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-red-400">
    <carbon-help-filled /> 痛点
  </h3>
  <ul class="space-y-3 opacity-90">
    <li class="flex items-start gap-2"><carbon-close-filled class="mt-1 text-red-500/50" /> 公司海量私有文档 AI 不知道</li>
    <li class="flex items-start gap-2"><carbon-close-filled class="mt-1 text-red-500/50" /> 产品文档、API、内部 WiKi 无法访问</li>
    <li class="flex items-start gap-2"><carbon-close-filled class="mt-1 text-red-500/50" /> 强行回答会导致严重的"幻觉"</li>
  </ul>
</div>

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card p-6 border-t-4 !border-t-green-500">
  <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
    <carbon-checkmark-filled /> 价值
  </h3>
  <ul class="space-y-3 opacity-90">
    <li class="flex items-start gap-2"><carbon-checkmark-filled class="mt-1 text-green-500/50" /> 实时补充上下文 Knowledge</li>
    <li class="flex items-start gap-2"><carbon-checkmark-filled class="mt-1 text-green-500/50" /> 显著降低模型幻觉</li>
    <li class="flex items-start gap-2"><carbon-checkmark-filled class="mt-1 text-green-500/50" /> 知识库更新无需重新训练模型</li>
  </ul>
</div>

</div>

<div v-click 
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
  class="mt-8 p-6 glass-card bg-green-500/5 flex items-center justify-center gap-4 text-green-200">
  <carbon-search class="text-2xl" />
  将 <span class="font-bold text-white">用户信息</span> + <span class="font-bold text-white">召回资料</span> 整合后交给 LLM 推理
</div>
