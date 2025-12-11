---
layout: default
---

# Function Calling 流程图

<div class="grid grid-cols-3 gap-6 mt-4 h-[75vh]">
  
  <div v-click 
    v-motion
    :initial="{ opacity: 0, x: -50 }"
    :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
    class="col-span-2 flex">
    <div class="max-h-[430px] max-w-full overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 rounded-lg">
      <img src="/imgs/function_calling_flow.png" class="w-auto h-full max-w-full rounded-lg shadow-2xl border border-white/10" />
    </div>
  </div>

  <div v-click 
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
    class="flex flex-col gap-3">
    <div class="text-center mb-2">
      <div class="text-sm opacity-70 mb-2 italic">
        ”内置到模型中的 <span class="text-blue-400 font-semibold">ReAct</span>“
      </div>
      <div class="text-lg font-bold text-green-400">核心优势</div>
    </div>
    <div class="glass-card p-3 border-l-4 !border-l-green-500 hover:scale-105 transition-transform">
      <div class="flex items-center gap-3">
        <div class="text-green-400 text-xl">
          <carbon-checkmark-filled />
        </div>
        <div class="flex-1">
          <div class="font-bold text-sm text-green-400">更稳定</div>
          <div class="text-xs opacity-70 mt-0.5">原生结构化输出，无需解析</div>
        </div>
      </div>
    </div>
    <div class="glass-card p-3 border-l-4 !border-l-blue-500 hover:scale-105 transition-transform">
      <div class="flex items-center gap-3">
        <div class="text-blue-400 text-xl">
          <carbon-locked />
        </div>
        <div class="flex-1">
          <div class="font-bold text-sm text-blue-400">更安全</div>
          <div class="text-xs opacity-70 mt-0.5">函数权限可控，避免注入攻击</div>
        </div>
      </div>
    </div>
    <div class="glass-card p-3 border-l-4 !border-l-purple-500 hover:scale-105 transition-transform">
      <div class="flex items-center gap-3">
        <div class="text-purple-400 text-xl">
          <carbon-settings />
        </div>
        <div class="flex-1">
          <div class="font-bold text-sm text-purple-400">更可控</div>
          <div class="text-xs opacity-70 mt-0.5">应用系统统一执行和监控</div>
        </div>
      </div>
    </div>
    <div class="glass-card p-3 border-l-4 !border-l-orange-500 hover:scale-105 transition-transform">
      <div class="flex items-center gap-3">
        <div class="text-orange-400 text-xl">
          <carbon-rocket />
        </div>
        <div class="flex-1">
          <div class="font-bold text-sm text-orange-400">开发者友好</div>
          <div class="text-xs opacity-70 mt-0.5">标准 API，易于集成和维护</div>
        </div>
      </div>
    </div>
  </div>
</div>



<!--
这张图展示了 Function Calling 的完整流程：
1. 用户发送请求
2. LLM 分析并决定调用哪个函数
3. 生成结构化的函数调用指令（JSON）
4. 应用系统执行该函数
5. 将执行结果返回给 LLM
6. LLM 基于结果生成最终回复

这个流程让 AI 从"只会说话"变成了"能做事"。
-->
