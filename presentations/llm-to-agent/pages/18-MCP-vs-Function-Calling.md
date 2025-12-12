---
layout: default
---

<script setup>
import ZoomableImageModal from '../components/ZoomableImageModal.vue'
import McpVsFcSequence from '../components/McpVsFcSequence.vue'

</script>

# MCP & Function Calling

<div 
  v-if="$clicks < 1"
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
  class="mt-12 glass-card !p-0 overflow-hidden text-sm">

| 特性 | Function Calling | MCP |
|------|-----------------|-----|
| **本质** | <span class="text-blue-400">LLM 能力</span> (如何调用) | <span class="text-purple-400">生态协议</span> (如何接入) |
| **执行者** | LLM Client Runtime | Independent MCP Server |
| **复用性** | 单一应用内 | **跨模型、跨应用共享** |
| **关系** | 消费端 | 供应端 |
| **位置** | 推理链内部 | 工具生态层 |

</div>

<div v-click="1"
  v-motion
  :initial="{ opacity: 0, scale: 0.95 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 400 } }">
  <McpVsFcSequence :start-clicks="1" />
</div>

<div 
  v-click="12"
  class="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
  <div 
    v-motion
    :initial="{ opacity: 0, scale: 0.9 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 500, type: 'spring' } }"
    class="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-2xl flex items-center gap-6 max-w-[70%] pointer-events-auto">
      <carbon-idea class="text-blue-400 text-4xl flex-shrink-0" />
      <div class="text-xl text-slate-200 leading-relaxed font-medium">
          它们并非二选一，而是互补：<br>
          <span class="text-blue-300 font-bold">LLM</span> 通过 <span class="text-red-400 font-bold">Function Calling</span> 能力去调用 <span class="text-purple-400 font-bold">MCP Server</span> 提供的工具。
      </div>
  </div>
</div>