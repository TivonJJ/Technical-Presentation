---
layout: default
---

# RAG 流程图

<div class="flex items-center justify-between gap-2 mt-20 px-8 relative">

  <!-- Connecting Line -->
  <div class="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 -z-10 transform -translate-y-1/2"></div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 hover:scale-105 transition">
    <carbon-user class="text-3xl text-blue-400 mb-2" />
    <span class="font-bold">用户问题</span>
  </div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 hover:scale-105 transition">
    <carbon-search-locate class="text-3xl text-purple-400 mb-2" />
    <span class="font-bold">向量检索</span>
    <span class="text-xs opacity-50 mt-1">Embedding Search</span>
  </div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 hover:scale-105 transition">
    <carbon-document-multiple-01 class="text-3xl text-green-400 mb-2" />
    <span class="font-bold">Relevant Docs</span>
    <span class="text-xs opacity-50 mt-1">Top-K Chunks</span>
  </div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 border-orange-500/50 hover:scale-105 transition shadow-[0_0_15px_rgba(249,115,22,0.3)]">
    <carbon-bot class="text-3xl text-orange-400 mb-2" />
    <span class="font-bold">LLM 回答</span>
    <span class="text-xs opacity-50 mt-1">Based on Context</span>
  </div>

</div>
