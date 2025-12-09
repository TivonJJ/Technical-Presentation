---
layout: default
---

<h1 
  v-motion
  :initial="{ opacity: 0, y: -30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }">
  Agent 运行模式
</h1>

<div class="grid grid-cols-2 gap-8 mt-12">

<div 
  v-click
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 400 } }"
  :leave="{ opacity: 0, x: -50, transition: { duration: 300 } }"
  class="glass-card p-6 hover:border-blue-500/50 transition duration-300">
  <h3 class="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
    <carbon-chemistry /> ReAct 模式
  </h3>
  <ul class="space-y-2 text-sm opacity-80 mb-4">
    <li>边想边做 (Reasoning + Acting)</li>
    <li>适合灵活的检索、探索性任务</li>
    <li>⚠️ 长链路容易跑偏</li>
  </ul>
</div>

<div 
  v-click
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 400 } }"
  :leave="{ opacity: 0, x: 50, transition: { duration: 300 } }"
  class="glass-card p-6 hover:border-green-500/50 transition duration-300 bg-green-500/5">
  <h3 class="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
    <carbon-list-checked /> Plan & Execute
  </h3>
  <ul class="space-y-2 text-sm opacity-80 mb-4">
    <li>先规划全局，再逐个执行</li>
    <li>状态可控、可回滚、可审计</li>
    <li>✅ 企业级应用首选方案</li>
  </ul>
</div>

</div>

<div 
  v-click
  v-motion
  :initial="{ opacity: 0, scale: 0.3 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 600, type: 'spring', bounce: 0.2 } }"
  :leave="{ opacity: 0, scale: 0.3, transition: { duration: 400 } }"
  class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8">
  <div class="relative">
    <img src="/imgs/plan-and-execute.png" class="max-w-[900px] max-h-[500px] object-cover rounded-lg shadow-2xl border border-white/20" />
    <div class="absolute top-4 right-4 text-white/60 text-sm">
      点击任意位置关闭
    </div>
  </div>
</div>
