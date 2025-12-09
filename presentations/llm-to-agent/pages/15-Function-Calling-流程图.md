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
    <div class="max-h-[430px]  max-w-full overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 rounded-lg">
      <img src="/imgs/function_calling_flow.png" class="w-auto h-full max-w-full rounded-lg shadow-2xl border border-white/10" />
    </div>
  </div>

  <div v-click 
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
    class="flex flex-col gap-3">
    <div class="glass-card p-3 text-center border-l-4 !border-l-green-500">
      <div class="text-green-400 text-xl mb-1">✅</div>
      <div class="font-bold text-sm text-green-400">稳定</div>
      <div class="text-xs opacity-70 mt-1">结构化输出</div>
    </div>
    <div class="glass-card p-3 text-center border-l-4 !border-l-green-500">
      <div class="text-green-400 text-xl mb-1">✅</div>
      <div class="font-bold text-sm text-green-400">安全</div>
      <div class="text-xs opacity-70 mt-1">权限可控</div>
    </div>
    <div class="glass-card p-3 text-center border-l-4 !border-l-green-500">
      <div class="text-green-400 text-xl mb-1">✅</div>
      <div class="font-bold text-sm text-green-400">可控</div>
      <div class="text-xs opacity-70 mt-1">系统执行</div>
    </div>
    <div class="glass-card p-3 text-center border-l-4 !border-l-green-500">
      <div class="text-green-400 text-xl mb-1">✅</div>
      <div class="font-bold text-sm text-green-400">开发者友好</div>
      <div class="text-xs opacity-70 mt-1">易于集成</div>
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
