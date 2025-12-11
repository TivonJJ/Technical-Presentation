---
layout: default
---

# Multi-Agent 协作

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="space-y-4">
  <div class="glass-card p-3 flex items-center gap-3" v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 200, duration: 500 } }">
    <div class="p-2 bg-blue-500/20 rounded text-blue-400"><carbon-code /></div>
    <div>代码生成专家<div class="text-xs opacity-50">Code Generator</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3" v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400, duration: 500 } }">
    <div class="p-2 bg-yellow-500/20 rounded text-yellow-400"><carbon-debug /></div>
    <div>测试专家<div class="text-xs opacity-50">Test Engineer</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3" v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600, duration: 500 } }">
    <div class="p-2 bg-green-500/20 rounded text-green-400"><carbon-security /></div>
    <div>代码审查专家<div class="text-xs opacity-50">Code Reviewer</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3" v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 800, duration: 500 } }">
    <div class="p-2 bg-purple-500/20 rounded text-purple-400"><carbon-search /></div>
    <div>网络检索专家<div class="text-xs opacity-50">Web Searcher</div></div>
  </div>
</div>

<div v-click class="glass-card p-4 flex items-center justify-center bg-black/40" v-motion :initial="{ x: 80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { duration: 600 } }">
  <img src="/imgs/agent-working.gif" class="rounded shadow-2xl max-h-64" />
</div>

</div>



<!--
随着任务越来越复杂，我们开始使用 Multi-Agent ——
让多个 Agent 分工协作，像一个开发团队一样工作。

例如在 AI Coding 场景中：
- 代码生成专家：负责编写代码实现
- 测试专家：负责编写和运行测试用例
- 代码审查专家：负责检查代码质量和安全性
- 网络检索专家：负责查找 API 文档、技术资料等

他们之间通过协议协调工作，完成复杂的开发任务。
-->
