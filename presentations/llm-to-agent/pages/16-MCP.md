---
layout: center
class: text-center
---

<div v-motion
  :initial="{ opacity: 0, y: -30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">

# MCP
## Model Context Protocol

</div>

<div v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
  class="mt-8 text-xl font-light opacity-90">
  如何让工具 <span class="text-purple-400 font-bold">"像插件一样"</span> 可以给任何 LLM 使用？
</div>

<div v-click v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
  class="mt-12 glass-card inline-block px-12 py-6 text-2xl font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/10">
  <carbon-plug class="inline-block mr-3 text-4xl align-middle" />
  MCP = "AI 世界的 USB 协议"
</div>
