---
layout: default
---

# Agent 开发工具

<div class="grid grid-cols-2 gap-8 mt-10">

<!-- 左侧：开发框架 -->
<div class="glass-card p-5 bg-gradient-to-br from-blue-500/10 to-transparent"
     v-motion :initial="{ x: -50, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { duration: 500 } }">
  <div class="flex items-center gap-3 mb-5">
    <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
      <carbon-code class="text-xl text-blue-400" />
    </div>
    <div>
      <h3 class="text-lg font-bold text-blue-100">专业 Agent 框架</h3>
      <div class="text-[10px] text-blue-300/70">面向工程师 · 灵活定制 · 生产级落地</div>
    </div>
  </div>

  <div class="flex flex-col gap-3">
    <div class="bg-white/5 rounded-lg p-2.5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
         v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }">
      <div class="p-1.5 rounded-md bg-blue-500/20 text-blue-400 mt-0.5">
        <carbon-data-base class="text-base" />
      </div>
      <div>
        <div class="text-white text-sm font-bold leading-tight">LlamaIndex</div>
        <div class="text-[10px] text-gray-400 mt-0.5 leading-snug">专注于 LLM 数据连接与索引的数据框架</div>
      </div>
    </div>
    <div class="bg-white/5 rounded-lg p-2.5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
         v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }">
      <div class="p-1.5 rounded-md bg-blue-500/20 text-blue-400 mt-0.5">
        <carbon-scis-transparent-supply class="text-base" />
      </div>
      <div>
        <div class="text-white text-sm font-bold leading-tight">LangChain</div>
        <div class="text-[10px] text-gray-400 mt-0.5 leading-snug">最流行的 LLM 应用开发通用框架</div>
      </div>
    </div>
    <div class="bg-white/5 rounded-lg p-2.5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
         v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 500 } }">
      <div class="p-1.5 rounded-md bg-blue-500/20 text-blue-400 mt-0.5">
        <carbon-network-4 class="text-base" />
      </div>
      <div>
        <div class="text-white text-sm font-bold leading-tight">LangGraph</div>
        <div class="text-[10px] text-gray-400 mt-0.5 leading-snug">构建有状态、多角色的复杂 Agent 工作流</div>
      </div>
    </div>
    <div class="bg-white/5 rounded-lg p-2.5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
         v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600 } }">
      <div class="p-1.5 rounded-md bg-blue-500/20 text-blue-400 mt-0.5">
        <carbon-bot class="text-base" />
      </div>
      <div>
        <div class="text-white text-sm font-bold leading-tight">AutoGen</div>
        <div class="text-[10px] text-gray-400 mt-0.5 leading-snug">微软出品的多智能体对话协作框架</div>
      </div>
    </div>
  </div>
</div>

<!-- 右侧：可视化平台 -->
<div class="glass-card p-5 bg-gradient-to-br from-green-500/10 to-transparent"
     v-motion :initial="{ x: 50, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { duration: 500 } }">
  <div class="flex items-center gap-3 mb-5">
    <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
      <carbon-flow class="text-xl text-green-400" />
    </div>
    <div>
      <h3 class="text-lg font-bold text-green-100">可视化平台</h3>
      <div class="text-[10px] text-green-300/70">面向业务人员 · 快速搭建 · 低代码</div>
    </div>
  </div>

  <div class="flex flex-col gap-3">
    <div class="bg-white/5 rounded-lg p-2.5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
         v-motion :initial="{ x: 20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }">
      <div class="p-1.5 rounded-md bg-green-500/20 text-green-400 mt-0.5">
        <carbon-dashboard class="text-base" />
      </div>
      <div>
        <div class="text-white text-sm font-bold leading-tight">Coze (扣子)</div>
        <div class="text-[10px] text-gray-400 mt-0.5 leading-snug">字节跳动推出的一站式 Agent 开发平台</div>
      </div>
    </div>
    <div class="bg-white/5 rounded-lg p-2.5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
         v-motion :initial="{ x: 20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }">
      <div class="p-1.5 rounded-md bg-green-500/20 text-green-400 mt-0.5">
        <carbon-application class="text-base" />
      </div>
      <div>
        <div class="text-white text-sm font-bold leading-tight">Dify</div>
        <div class="text-[10px] text-gray-400 mt-0.5 leading-snug">开源 LLM 应用开发平台，零代码搭建 Agent</div>
      </div>
    </div>
    <div class="bg-white/5 rounded-lg p-2.5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
         v-motion :initial="{ x: 20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 500 } }">
      <div class="p-1.5 rounded-md bg-green-500/20 text-green-400 mt-0.5">
        <carbon-flow-stream class="text-base" />
      </div>
      <div>
        <div class="text-white text-sm font-bold leading-tight">Flowise</div>
        <div class="text-[10px] text-gray-400 mt-0.5 leading-snug">开源的 UI 可视化 LangChain 编排工具</div>
      </div>
    </div>
    <div class="bg-white/5 rounded-lg p-2.5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
         v-motion :initial="{ x: 20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600 } }">
      <div class="p-1.5 rounded-md bg-green-500/20 text-green-400 mt-0.5">
        <carbon-tree-view-alt class="text-base" />
      </div>
      <div>
        <div class="text-white text-sm font-bold leading-tight">n8n</div>
        <div class="text-[10px] text-gray-400 mt-0.5 leading-snug">强大的工作流自动化工具 <span class="text-yellow-400">· 有一定门槛</span></div>
      </div>
    </div>
  </div>
</div>

</div>
