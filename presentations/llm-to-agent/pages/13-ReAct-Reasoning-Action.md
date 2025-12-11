---
layout: default
---

# ReAct — Reasoning + Action

<div v-click 
  v-motion
  :initial="{ opacity: 0, y: -20 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
  class="mb-3 px-2 py-1 bg-blue-500/10 rounded border-l-2 border-blue-500 text-xs opacity-80">
  <span class="text-blue-300 font-bold">LLM 工具调用的起点 · 核心思想：</span>模型自己规划要做什么，然后调用一个工具（Action），再根据结果继续推理。
</div>

<div class="grid grid-cols-2 gap-6 mb-3">

<div v-click="1"
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card p-4">
  <h3 class="text-base font-bold mb-2 text-blue-300 flex items-center gap-2">
    <carbon-code class="text-lg" /> 简易实现原理
  </h3>
  <div class="text-xs font-mono bg-black/40 p-3 rounded overflow-auto max-h-72">
    <div class="text-gray-400 mb-1">// System Prompt</div>
    <div class="text-white mb-2">
你是一个天气查询助手，你可以根据用户的问题查询天气。<br/>
有以下工具可以调用：
    </div>
    <div class="text-green-300 mb-2">
- get_weather(city: str) -> str: 查询指定城市的天气
    </div>
    <div class="text-white mb-2">
如果用户问了一个关于天气的问题，你需要调用 get_weather 工具，<br/>
按照以下格式输出：
    </div>
    <div class="text-yellow-300">
```json<br/>
{"action": "get_weather", "city": "Beijing"}<br/>
```
    </div>
  </div>
</div>

<div v-click="2"
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card p-4 bg-gray-900/50">
  <h3 class="text-base font-bold mb-2 text-purple-300 flex items-center gap-2">
    <carbon-flow class="text-lg" /> ReAct 模式
  </h3>
  <div class="font-mono text-xs space-y-1.5">
    <div><span class="text-blue-400">Thought:</span> <span class="opacity-80">我需要获取天气数据</span></div>
    <div><span class="text-yellow-400">Action:</span> <span class="opacity-80">get_weather("Beijing")</span></div>
    <div><span class="text-green-400">Observation:</span> <span class="opacity-80">北京天气晴朗，温度25摄氏度</span></div>
    <div><span class="text-blue-400">Thought:</span> <span class="opacity-80">所以用户需要知道北京的天气</span></div>
    <div><span class="text-purple-400">Final Answer:</span> <span class="opacity-80">北京天气晴朗，温度25摄氏度</span></div>
  </div>
</div>

</div>

<!-- ReAct 流程图 - 先显示 -->
<div v-click="3"
  v-show="$slidev.nav.clicks === 3"
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
  :leave="{ opacity: 0, scale: 0.8, transition: { duration: 400 } }"
  class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
  <img src="/imgs/llm-ReAct-flow.gif" alt="ReAct Flow" class="max-w-4xl max-h-[80vh] rounded-lg shadow-2xl" />
</div>

<!-- 缺点提示 - 图片关闭后显示 -->
<div v-click="4"
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
  class="glass-card px-3 py-2 border-l-2 !border-l-red-500 bg-red-500/5">
  <div class="flex items-start gap-2">
    <carbon-warning-filled class="text-red-400 text-sm flex-shrink-0 mt-0.5" />
    <div class="text-xs">
      <span class="font-bold text-red-400">缺点：</span>
      <span class="opacity-80">输出格式不稳定 · 识别成功率不稳定（特别是在一些小模型上） · 过程和结果难控制 · 没有统一标准</span>
    </div>
  </div>
</div>
