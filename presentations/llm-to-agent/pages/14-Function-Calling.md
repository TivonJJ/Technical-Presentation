---
layout: default
---

# Function Calling
<div class="text-sm opacity-60 mb-8">标准化的工具调用方式 (OpenAI / Claude / Gemini)</div>

<div class="grid grid-cols-2 gap-4 h-[65%]">
  <div class="glass-card p-4 flex flex-col">
    <div class="flex items-center justify-between mb-2">
      <span class="font-bold text-sm text-blue-400">Request (Schema)</span>
      <carbon-json class="opacity-50"/>
    </div>
    <pre class="flex-1 bg-black/30 p-2 text-[10px] leading-tight overflow-hidden rounded !bg-transparent">
{
  "type": "function",
  "name": "get_weather",
  "description": "Retrieves current weather",
  "parameters": {
    "type": "object",
    "properties": {
      "location": { "type": "string" },
      "units": { "enum": ["c", "f"] }
    },
    "required": ["location", "units"]
  }
}
    </pre>
  </div>

  <div class="glass-card p-4 flex flex-col">
    <div class="flex items-center justify-between mb-2">
      <span class="font-bold text-sm text-green-400">Response (Call)</span>
      <carbon-code class="opacity-50"/>
    </div>
    <pre class="flex-1 bg-black/30 p-2 text-[10px] leading-tight overflow-hidden rounded !bg-transparent">
[{
  "id": "call_123456",
  "type": "function_call",
  "name": "get_weather",
  "arguments": "{\"location\":\"Paris\"}"
}]
    </pre>
  </div>
</div>

<div class="grid grid-cols-4 gap-4 mt-6">
  <div class="glass-card p-3 text-center text-sm font-bold text-green-400 border-green-500/30">✅ 稳定</div>
  <div class="glass-card p-3 text-center text-sm font-bold text-green-400 border-green-500/30">✅ 安全</div>
  <div class="glass-card p-3 text-center text-sm font-bold text-green-400 border-green-500/30">✅ 可控</div>
  <div class="glass-card p-3 text-center text-sm font-bold text-green-400 border-green-500/30">✅ 开发者友好</div>
</div>
