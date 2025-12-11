---
layout: default
---

# Agentic 应用

<div class="px-4 mt-4">

<div class="glass-card p-6 border-l-4 border-l-purple-500 mb-6" v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }">
  <div class="flex items-center gap-3 mb-3">
    <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold border border-purple-500/30">
        核心特征：主动性
    </span>
  </div>
  <p class="opacity-90 leading-relaxed text-base">
    Agentic 应用可以被理解为：由大量协作的 AI Agents（类似“虚拟员工”）组成的系统，每个 Agent 负责不同的子任务，并通过 MCP、RAG 等工具链进行协同，从而形成一个能够<span class="text-purple-400 font-bold">自主规划、执行与调整任务</span>的、具备高度主动性的应用。
  </p>
</div>

<div class="grid grid-cols-5 gap-4 mt-8">
  <div class="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-colors"
       v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 200 } }">
     <carbon-document class="text-3xl text-blue-400" />
     <span class="text-sm font-bold">读文档</span>
  </div>
  <div class="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-colors"
       v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 300 } }">
     <carbon-data-view class="text-3xl text-green-400" />
     <span class="text-sm font-bold">看日志</span>
  </div>
  <div class="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-colors"
       v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 400 } }">
     <carbon-task class="text-3xl text-yellow-400" />
     <span class="text-sm font-bold">执行任务</span>
  </div>
  <div class="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-colors"
       v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 500 } }">
     <carbon-warning class="text-3xl text-red-400" />
     <span class="text-sm font-bold">发现问题</span>
  </div>
  <div class="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-colors"
       v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 600 } }">
     <carbon-collaborate class="text-3xl text-purple-400" />
     <span class="text-sm font-bold">协作协同</span>
  </div>
</div>

<div class="mt-6 flex justify-center w-full" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800 } }">
    <div class="glass-card py-2 px-6 inline-flex items-center gap-3">
        <span class="text-sm opacity-60">工具链支撑</span>
        <div class="h-4 w-px bg-white/20"></div>
        <div class="flex gap-4 text-sm font-mono text-purple-300">
            <span>RAG</span>
            <span>MCP</span>
            <span>Tool-Calling</span>
        </div>
    </div>
</div>

</div>
