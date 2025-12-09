---
layout: default
---

<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
</script>

# RAG 流程图

<div class="flex items-center justify-between gap-2 mt-20 px-8 relative">

  <!-- Connecting Line -->
  <div class="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 -z-10 transform -translate-y-1/2"></div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 hover:scale-105 transition">
    <carbon-user class="text-3xl text-blue-400 mb-2" />
    <span class="font-bold">用户问题</span>
  </div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 hover:scale-105 transition relative group">
    <carbon-search-locate class="text-3xl text-purple-400 mb-2" />
    <span class="font-bold">向量检索</span>
    <span class="text-xs opacity-50 mt-1">Embedding Search</span>
    <button 
      class="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition hover:bg-purple-600 shadow-md"
      @click="showModal = true"
      title="Show Process"
    >
      <carbon-play-filled-alt class="text-xs" />
    </button>
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

<!-- Modal Overlay -->
<div 
  v-if="showModal"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300"
  @click.self="showModal = false"
>
  <div class="glass-card p-8 relative max-w-2xl w-full flex flex-col items-center shadow-2xl border border-white/10 bg-[#121212]">
    <button 
      class="absolute top-4 right-4 text-gray-400 hover:text-white transition"
      @click="showModal = false"
    >
      <carbon-close class="text-2xl" />
    </button>
    <h2 class="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
      向量化与存储过程
    </h2>
    <div class="w-full h-80 flex items-center justify-center border border-white/5 rounded-xl bg-black/20">
      <VectorStorageAnimation />
    </div>
  </div>
</div>
