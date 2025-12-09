
<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
</script>

# GraphRAG
<div class="text-sm opacity-60 mb-8">传统 RAG 的结构性升级</div>

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click 
  v-motion
  :initial="{ opacity: 0, scale: 0.95 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
  class="glass-card p-6 border-l-4 !border-l-green-500/50 bg-green-500/5 relative group">
  
  <button 
      class="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition hover:bg-green-600 shadow-md z-10"
      @click="showModal = true"
      title="Show Graph Animation"
    >
      <carbon-play-filled-alt class="text-xs" />
  </button>

  <h3 class="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
    <carbon-network-3 /> GraphRAG 的优势
  </h3>
  <ul class="space-y-2 text-sm opacity-80 list-none">
    <li class="flex items-start gap-2">
      <carbon-checkmark-filled class="mt-0.5 text-green-500/50 flex-shrink-0" />
      <span>抽取实体（Entity）与关系（Relation）</span>
    </li>
    <li class="flex items-start gap-2">
      <carbon-checkmark-filled class="mt-0.5 text-green-500/50 flex-shrink-0" />
      <span>构建知识图谱</span>
    </li>
    <li class="flex items-start gap-2">
      <carbon-checkmark-filled class="mt-0.5 text-green-500/50 flex-shrink-0" />
      <span>支持多跳推理</span>
    </li>
    <li class="flex items-start gap-2">
      <carbon-checkmark-filled class="mt-0.5 text-green-500/50 flex-shrink-0" />
      <span>更精准召回</span>
    </li>
  </ul>
</div>

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card !p-0 overflow-hidden text-sm">

| 能力 | 传统 RAG | GraphRAG |
|------|---------|----------|
| **理解结构关系** | <span class="text-red-400">❌</span> | <span class="text-green-400">✔</span> |
| **多跳推理** | <span class="text-red-400">❌</span> | <span class="text-green-400">✔</span> |
| **长文档稳定性** | <span class="text-yellow-400">中等</span> | <span class="text-green-400">高</span> |
| **召回精准度** | <span class="text-red-400">容易有噪声</span> | <span class="text-green-400">显著提升</span> |
| **适用场景** | FAQ、短文档 | 复杂文档、系统依赖、技术知识库 |

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
    <h2 class="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
      GraphRAG 索引构建
    </h2>
    <div class="w-full h-80 flex items-center justify-center border border-white/5 rounded-xl bg-black/20">
      <GraphRagAnimation />
    </div>
  </div>
</div>

<!--
我们刚刚提到传统 RAG 最大的问题之一，就是"语义切片之后，上下文关系被打断"。
RAG 能找到相关内容，但并不理解文档结构、实体关系、引用链，也无法执行多跳推理。
GraphRAG 解决的，就是传统 RAG 的"结构性缺陷"。

GraphRAG 通过构建知识图谱，让模型不仅能找到相关内容，还能理解内容之间的关系。
这对于复杂文档、技术知识库、系统依赖分析等场景特别有用。
-->
