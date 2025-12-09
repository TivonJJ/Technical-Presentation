---
layout: default
---

# Function Calling 流程图

<div class="flex items-center justify-center h-[80%]">
  <img src="/imgs/function_calling_flow.png" class="max-h-full rounded-lg shadow-2xl border border-white/10" />
</div>

<div class="text-center text-sm opacity-50 mt-4">
  用户请求 → LLM 识别意图 → 生成函数调用 → 系统执行 → 返回结果 → LLM 生成回复
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
