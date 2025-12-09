---
layout: default
---

# Context Window

<div class="grid grid-cols-2 gap-6 mt-4 items-start">

<div class="space-y-3">
  <div v-click class="glass-card p-4 border-l-4 !border-l-blue-500">
    <h3 class="text-base font-bold mb-1 flex items-center gap-2">
      <carbon-time class="text-blue-400"/> 无长期记忆
    </h3>
    <p class="opacity-80 text-sm">LLM 本身不存储之前的对话状态，每一次交互都是独立的。</p>
  </div>

  <div v-click class="glass-card p-4 border-l-4 !border-l-purple-500">
    <h3 class="text-base font-bold mb-1 flex items-center gap-2">
      <carbon-data-view-alt class="text-purple-400"/> 依赖当前窗口
    </h3>
    <p class="opacity-80 text-sm">所有的"记忆"都必须作为 Input (Prompt) 的一部分传入。</p>
  </div>

  <div v-click class="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-center font-bold text-sm">
    Context = 模型做判断的"全部输入信息"
  </div>
</div>

<div class="relative">
  <div v-click class="relative">
    <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
    <!-- 可滚动的图片容器 -->
    <div class="relative rounded-lg shadow-2xl border border-white/10 overflow-y-auto overflow-x-hidden max-h-96 bg-gray-900/30 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800">
      <img 
        src="/imgs/kiro-context.jpg" 
        class="w-full" 
      />
    </div>
  </div>
  
  <!-- 弹出提示框（独立的 click）-->
  <div v-click 
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
    class="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-50 px-4"
  >
    <div class="glass-card p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
      <div class="flex items-start gap-2">
        <carbon-information class="text-xl text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <div class="font-bold text-sm mb-1">还包含我们看不到的</div>
          <div class="text-xs opacity-80">
            System Prompt (MCP, Rules, Project structure...)
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
