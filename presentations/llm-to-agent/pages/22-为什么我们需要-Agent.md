---
layout: default
---

<h1 
  v-motion
  :initial="{ opacity: 0, y: -30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }">
  为什么我们需要 Agent？
</h1>

<div class="grid grid-cols-2 gap-12 mt-8 items-center h-[70%]">

<div 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 400, delay: 200 } }"
  class="relative">
  <div class="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
  <div class="glass-card p-6 relative">
    <h3 class="font-bold mb-4 flex items-center gap-2"><carbon-flow-stream /> 典型业务流程</h3>
    <ul class="space-y-3 text-sm">
      <li 
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 200, delay: 400 } }"
        class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">1</div> 查数据库 (SQL)</li>
      <li 
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 200, delay: 500 } }"
        class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">2</div> 过滤结果 (Filter)</li>
      <li 
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 200, delay: 600 } }"
        class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">3</div> 生成报告 (Gen)</li>
      <li 
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 200, delay: 700 } }"
        class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">4</div> 写入系统 (API)</li>
      <li 
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 200, delay: 800 } }"
        class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">5</div> 邮件通知 (SMTP)</li>
    </ul>
    <div 
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1, transition: { duration: 300, delay: 900 } }"
      class="mt-4 text-xs text-red-300 bg-red-500/10 p-2 rounded">
      🚫 靠人写 Prompt 一步步操作是不可能的
    </div>
  </div>
</div>

<div class="text-center">
  <h3 
    v-click
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    :leave="{ opacity: 0, y: -20, transition: { duration: 300 } }"
    class="text-3xl font-bold mb-6 text-gradient">Agent 的价值</h3>
  <div 
    v-after
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 200, type: 'spring', bounce: 0.3 } }"
    :leave="{ opacity: 0, scale: 0.8, transition: { duration: 300 } }"
    class="glass-card p-6 bg-purple-500/10 border-purple-500/30">
    <div class="text-xl font-bold mb-2">"持续工作能力"</div>
    <p class="opacity-70 text-sm">Autonomous Task Execution</p>
  </div>
  <div 
    v-after
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: 400 } }"
    :leave="{ opacity: 0, y: 20, transition: { duration: 300 } }"
    class="mt-6 text-sm opacity-80 leading-relaxed">
    在没有人工干预的情况下<br/>独立完成多步骤、多依赖的复杂任务链
  </div>
</div>

</div>
