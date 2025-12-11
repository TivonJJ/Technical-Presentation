---
theme: penguin
title: 现代 AI 架构演进
info: |
  ## 从 LLM 到 Agent 的能力扩展路径
  探索大模型如何理解、连接并执行业务需求
author: Your Name
transition: slide-left
mdc: true
---

<div class="h-full w-full flex flex-col justify-center items-center text-center">
<div v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
  <h1 class="text-6xl mb-4 font-extrabold !leading-tight">
    现代 <span class="text-gradient">AI 架构</span> 演进
  </h1>
</div>
<div v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 500, duration: 1000 } }">
  <p class="text-2xl text-gray-300 font-light tracking-widest uppercase">
    从 LLM 到 Agent 的能力扩展路径
  </p>
</div>
<div class="absolute bottom-8 left-0 right-0 flex justify-center">
  <div class="avatar-container">
    <div class="avatar-ring"></div>
    <div 
      @click="$slidev.nav.next()" 
      class="avatar-core hover:scale-110 transition duration-300 cursor-pointer"
    >
      <span class="text-xs font-bold text-white drop-shadow-md">Go!</span>
    </div>
  </div>
</div>
</div>

---
src: ./pages/01-今天我们要讨论的核心内容.md
---

---
src: ./pages/02-LLM-基础概念.md
---

---
src: ./pages/03-什么是上下文Context.md
---

---
src: ./pages/04-主流大模型上下文窗口对比.md
---

---
src: ./pages/05-Prompt-Engineering.md
---

---
src: ./pages/06-RAG.md
---

---
src: ./pages/07-RAG-是什么.md
---

---
src: ./pages/08-RAG-流程图.md
---

---
src: ./pages/09-传统-RAG-存在的缺陷.md
---

---
src: ./pages/10-GraphRAG.md
---

---
src: ./pages/11-RAG-的实际应用场景.md
---

---
src: ./pages/12-大模型如何访问外部数据与执行外部动作.md
---

---
src: ./pages/13-ReAct-Reasoning-Action.md
---

---
src: ./pages/14-Function-Calling.md
---

---
src: ./pages/15-Function-Calling-流程图.md
---

---
src: ./pages/16-MCP.md
---

---
src: ./pages/17-MCP-核心能力.md
---

---
src: ./pages/18-MCP-vs-Function-Calling.md
---

---
src: ./pages/19-Agent-Skills.md
---

---
src: ./pages/20-恭喜.md
---

---
src: ./pages/21-Agent.md
---

---
src: ./pages/22-为什么我们需要-Agent.md
---

---
src: ./pages/23-Agent-运行模式.md
---

---
src: ./pages/24-Multi-Agent-协作.md
---

---
src: ./pages/25-A2A-协议.md
---

---
src: ./pages/26-Agentic-应用.md
---

---
src: ./pages/27-Agent-开发工具.md
---

---
src: ./pages/28-总结从-LLM-到-Agent.md
---

---
src: ./pages/29-技术演进解决的三个核心问题.md
---

---
src: ./pages/30-谢谢.md
---

