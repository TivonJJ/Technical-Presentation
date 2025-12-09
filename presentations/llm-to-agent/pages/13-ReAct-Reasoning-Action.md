---
layout: default
---

# ReAct — Reasoning + Action
<div class="text-sm opacity-60 font-mono mb-8">LLM 工具调用的起点</div>

<div class="grid grid-cols-2 gap-8 h-[75%]">

<div class="flex flex-col gap-6">
  <div class="glass-card p-6 border-l-4 !border-l-blue-500">
    <h3 class="text-lg font-bold mb-2 text-blue-300">核心思想</h3>
    <p class="opacity-80">模型自己规划要做什么，然后调用一个工具（Action），再根据结果继续推理。</p>
  </div>
  
  <div class="glass-card p-4 flex-1">
    <div class="text-xs opacity-50 mb-2">PROMPT EXAMPLE</div>
    <div class="text-xs font-mono bg-black/30 p-2 rounded h-full overflow-hidden">
System: 你是一个天气查询助手... <br/>
{"action": "get_weather", "city": {"name": "Beijing"}}
    </div>
  </div>
</div>

<div class="flex flex-col gap-4">
  <div class="glass-card p-4 bg-gray-900/50 font-mono text-xs">
    <span class="text-blue-400">Thought:</span> 我需要获取天气数据<br/>
    <span class="text-yellow-400">Action:</span> get_weather("Beijing")<br/>
    <span class="text-green-400">Observation:</span> 北京天气晴朗，25℃<br/>
    <span class="text-blue-400">Thought:</span> 用户需要知道天气<br/>
    <span class="text-purple-400">Final Answer:</span> 北京晴朗，25℃
  </div>

  <div class="glass-card p-4 border-l-4 !border-l-red-500 bg-red-500/5">
    <div class="flex items-center gap-2 font-bold text-red-400 mb-2">
      <carbon-warning-filled /> 缺点
    </div>
    <ul class="text-sm space-y-1 opacity-80">
      <li>• 输出格式不稳定</li>
      <li>• 识别成功率低（小模型）</li>
      <li>• 过程难控制</li>
    </ul>
  </div>
</div>

</div>
