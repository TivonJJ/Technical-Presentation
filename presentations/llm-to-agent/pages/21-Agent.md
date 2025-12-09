---
layout: center
class: text-center
---

<h1 
  v-motion
  :initial="{ opacity: 0, y: -30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 240 } }">
  Agent
</h1>

<h2 
  v-motion
  :initial="{ opacity: 0, y: -20 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 200, delay: 80 } }">
  从工具调用到自主任务执行
</h2>

<div class="mt-12 grid grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
  <div 
    v-motion
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 200, delay: 160, type: 'spring', bounce: 0.4 } }"
    class="glass-card p-4">
    <carbon-search class="text-2xl text-blue-400 mb-2"/>
    <div class="font-bold">感知</div>
    <div class="text-xs opacity-60">Observation</div>
  </div>
  <div 
    v-motion
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 200, delay: 240, type: 'spring', bounce: 0.4 } }"
    class="glass-card p-4">
    <carbon-idea class="text-2xl text-yellow-400 mb-2"/>
    <div class="font-bold">思考</div>
    <div class="text-xs opacity-60">Planning</div>
  </div>
  <div 
    v-motion
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 200, delay: 320, type: 'spring', bounce: 0.4 } }"
    class="glass-card p-4">
    <carbon-tools class="text-2xl text-green-400 mb-2"/>
    <div class="font-bold">行动</div>
    <div class="text-xs opacity-60">Action</div>
  </div>
  <div 
    v-motion
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 200, delay: 400, type: 'spring', bounce: 0.4 } }"
    class="glass-card p-4">
    <carbon-text-link class="text-2xl text-purple-400 mb-2"/>
    <div class="font-bold">反馈</div>
    <div class="text-xs opacity-60">Reflection</div>
  </div>
</div>
