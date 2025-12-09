---
layout: default
---

# 传统 RAG 存在的缺陷

<div class="grid grid-cols-2 gap-12 mt-12">

<div class="space-y-4">
  <div v-click class="glass-card p-4 flex items-center gap-3 border-l-2 !border-l-red-500/50">
    <carbon-warning class="text-red-400 text-xl" />
    <span>向量检索不精准，容易召回噪声</span>
  </div>
  <div v-click class="glass-card p-4 flex items-center gap-3 border-l-2 !border-l-red-500/50">
    <carbon-cut class="text-red-400 text-xl" />
    <span>文档切片（Chunking）导致上下文结构丢失</span>
  </div>
  <div v-click class="glass-card p-4 flex items-center gap-3 border-l-2 !border-l-red-500/50">
    <carbon-network-2 class="text-red-400 text-xl" />
    <span>缺乏实体间关系，难以进行多跳推理</span>
  </div>
</div>

<div v-click class="glass-card p-6 bg-red-500/5 border border-red-500/20">
  <h3 class="text-lg font-bold text-red-300 mb-4">典型案例：切片导致的语义断裂</h3>
  
  <div class="text-sm opacity-80 mb-2">原文：</div>
  <div class="p-3 bg-black/20 rounded italic mb-4 border-l-2 border-gray-500">
    "我昨天把手机掉进水里了，所以今天不能联系你。"
  </div>

  <div class="grid grid-cols-1 gap-2">
    <div class="p-2 bg-red-500/10 rounded flex justify-between items-center">
      <span>Chunk A: 掉进水里</span> 
      <span class="text-xs bg-red-500/20 px-2 py-1 rounded">原因</span>
    </div>
    <div class="p-2 bg-red-500/10 rounded flex justify-between items-center">
      <span>Chunk B: 无法联系</span>
      <span class="text-xs bg-red-500/20 px-2 py-1 rounded">结果</span>
    </div>
  </div>
  
  <div class="mt-4 text-sm text-red-200">
    <carbon-arrow-down class="inline mb-1"/> 检索时可能只找回 B，模型不知道 A 的存在，因果链断裂。
  </div>
</div>

</div>
