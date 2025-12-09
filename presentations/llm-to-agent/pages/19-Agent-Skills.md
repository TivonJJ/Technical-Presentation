---
layout: default
---

# Skills
<div class="text-sm opacity-60 mb-8">Anthropic 2025年10月推出的可复用任务单元</div>

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card p-6 border-l-4 !border-l-purple-500">
  <h3 class="text-lg font-bold text-purple-300 mb-4">核心特点 & 适用场景</h3>
  
  <div class="grid grid-cols-2 gap-6">
    <div>
      <h4 class="text-sm font-bold text-purple-200 mb-2 opacity-80">特点</h4>
      <ul class="space-y-2 text-sm opacity-90">
        <li class="flex items-center gap-2"><carbon-checkmark class="text-green-500/70" /> 结构化的输入输出</li>
        <li class="flex items-center gap-2"><carbon-checkmark class="text-green-500/70" /> 稳定的函数式调用</li>
        <li class="flex items-center gap-2"><carbon-checkmark class="text-green-500/70" /> 可复用的任务单元</li>
        <li class="flex items-center gap-2"><carbon-checkmark class="text-green-500/70" /> 不参与上下文（独立运行）</li>
      </ul>
    </div>
    <div>
      <h4 class="text-sm font-bold text-blue-200 mb-2 opacity-80">场景</h4>
      <ul class="space-y-2 text-sm opacity-90">
        <li class="flex items-center gap-2"><carbon-arrow-right class="text-blue-500/70" /> 固定流程的重复性任务</li>
        <li class="flex items-center gap-2"><carbon-arrow-right class="text-blue-500/70" /> 标准化的数据处理</li>
      </ul>
    </div>
  </div>
</div>

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex flex-col justify-center">
  <h3 class="text-lg font-bold text-purple-300 mb-4 text-center">Skills & Function Calling & MCP</h3>
  <div class="grid grid-cols-3 gap-3">
    <div class="text-center p-3 bg-purple-500/10 rounded border border-purple-500/20">
      <div class="text-purple-400 font-bold text-sm mb-1">Skills</div>
      <div class="opacity-80 text-xs">任务封装层</div>
    </div>
    <div class="text-center p-3 bg-blue-500/10 rounded border border-blue-500/20">
      <div class="text-blue-400 font-bold text-sm mb-1">Function Calling</div>
      <div class="opacity-80 text-xs">调用机制</div>
    </div>
    <div class="text-center p-3 bg-green-500/10 rounded border border-green-500/20">
      <div class="text-green-400 font-bold text-sm mb-1">MCP</div>
      <div class="opacity-80 text-xs">工具生态协议</div>
    </div>
  </div>
</div>

</div>
