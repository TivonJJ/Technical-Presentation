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

<!-- Cover Slide -->
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

<!--
大家好，今天的分享主题是：大模型如何理解、连接、并最终执行我们的业务需求，从而进化出真正可用的 AI Agent。

过去一年，AI 技术出现了非常明显的演进路线：
- 从只会对话的 LLM
- 到能访问外部知识的 RAG
- 到能调用工具的 Function Calling / MCP
- 最终发展到可以自主规划任务的 Agent

对我们工程团队来说，理解这条演进路径非常重要。因为它不仅能帮助我们判断一个 AI 能做什么，还能帮助我们设计未来的 AI 系统架构。

今天的分享不会偏重模型原理，而是重点回答三个核心问题：
1. 大模型如何理解信息与上下文？
2. 大模型如何访问外部数据与外部系统？
3. 如何进一步构建可自动协作的 Agent？

分享中会结合一些示例、架构图，还有几个 demo，帮助大家更直观理解这些能力如何落地。
-->

---
layout: default
---

# 今天我们要讨论的核心内容

<div class="grid grid-cols-2 gap-6 mt-12 pr-12">

<div v-click v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card flex items-center gap-6 p-6">
  <div class="text-4xl text-blue-400 bg-blue-500/10 p-4 rounded-full">
    <carbon-cognitive />
  </div>
  <div>
    <h3 class="text-xl font-bold mb-1">理解与上下文</h3>
    <div class="opacity-70 text-sm">大模型如何记忆和处理信息</div>
  </div>
</div>

<div v-click v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card flex items-center gap-6 p-6">
  <div class="text-4xl text-purple-400 bg-purple-500/10 p-4 rounded-full">
    <carbon-network-4 />
  </div>
  <div>
    <h3 class="text-xl font-bold mb-1">连接外部世界</h3>
    <div class="opacity-70 text-sm">Function Calling & MCP 协议</div>
  </div>
</div>

<div v-click v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
  class="glass-card flex items-center gap-6 p-6 col-span-2">
  <div class="text-4xl text-green-400 bg-green-500/10 p-4 rounded-full">
    <carbon-iot-connect />
  </div>
  <div>
    <h3 class="text-xl font-bold mb-1">构建协作智能体</h3>
    <div class="opacity-70 text-sm">ReAct 模式与多智能体协作</div>
  </div>
</div>

</div>

<div v-after v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
  class="mt-12 text-center text-sm opacity-50 font-mono">
  FROM CHATBOT TO AGENTIC WORKFLOW
</div>

---
layout: default
---

# LLM 基础概念

<div class="flex items-center gap-3 text-sm opacity-80 mb-6 font-light">
  <carbon-idea class="text-xl text-yellow-400" />
  <span>根据海量训练数据学习语言和知识的规律，然后根据上下文预测下一段最合理的内容</span>
</div>

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click v-motion
  :initial="{ opacity: 0, x: -30 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card !p-8 h-full">
  <div class="flex items-center gap-3 mb-6 text-blue-400">
    <carbon-txt class="text-3xl" />
    <h2 class="text-xl m-0">文本模型</h2>
  </div>
  <ul class="space-y-3 pl-4">
    <li class="flex items-center gap-3">
      <div class="w-5 h-5 flex items-center justify-center">
        <carbon-logo-openshift class="text-green-400" />
      </div>
      <span>GPT-4 / 3.5</span>
    </li>
    <li class="flex items-center gap-3">
      <div class="w-5 h-5 flex items-center justify-center">
        <carbon-cloud class="text-orange-400" />
      </div>
      <span>Claude 3 Haiku</span>
    </li>
    <li class="flex items-center gap-3">
      <div class="w-5 h-5 flex items-center justify-center">
        <carbon-logo-google class="text-blue-400" />
      </div>
      <span>Gemini Pro</span>
    </li>
    <li class="flex items-center gap-3">
      <div class="w-5 h-5 flex items-center justify-center">
        <carbon-chip class="text-purple-400" />
      </div>
      <span>Llama 3</span>
    </li>
  </ul>
</div>

<div v-click v-motion
  :initial="{ opacity: 0, x: 30 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
  class="glass-card !p-8 h-full">
  <div class="flex items-center gap-3 mb-6 text-purple-400">
    <carbon-image class="text-3xl" />
    <h2 class="text-xl m-0">多模态模型</h2>
  </div>
  <ul class="space-y-3 pl-4">
    <li class="flex items-center gap-3">
      <div class="w-5 h-5 flex items-center justify-center">
        <carbon-logo-openshift class="text-green-400" />
      </div>
      <span>GPT-4o</span>
    </li>
    <li class="flex items-center gap-3">
      <div class="w-5 h-5 flex items-center justify-center">
        <carbon-cloud class="text-orange-400" />
      </div>
      <span>Claude 3.5 Sonnet</span>
    </li>
    <li class="flex items-center gap-3">
      <div class="w-5 h-5 flex items-center justify-center">
        <carbon-logo-google class="text-blue-400" />
      </div>
      <span>Gemini 1.5 Pro</span>
    </li>
    <li class="flex items-center gap-3">
      <div class="w-5 h-5 flex items-center justify-center">
        <carbon-logo-x class="text-gray-300" />
      </div>
      <span>Grok 2</span>
    </li>
  </ul>
</div>

</div>

<div v-click v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
  class="mt-6 p-4 border border-blue-500/30 bg-blue-500/5 rounded-lg text-center text-sm text-blue-200 flex items-center justify-center gap-2">
  <carbon-information class="text-blue-400" />
  <span>不同模型有不同的特点、擅长场景、上下文支持和成本差异</span>
</div>

<!--
在正式进入 RAG、工具调用、MCP 和 Agent 之前，我们先非常简单地讲一下 LLM —— 大语言模型。

其实这个大家都已经很熟悉了，从最早的 GPT 到现在各种多模态模型，各大厂商几乎都推出了自己的产品。

目前主流模型也非常丰富，比如我们开发最喜欢用的 Claude，以及在专业法律知识上表现很强的 Grok 等等。不同模型都有自己的特点、擅长的场景，以及不同的上下文支持和成本差异。

不过，这些模型本身并不是我们这次分享的重点，我们不会花时间去比较模型能力，而是把重心放在：这些模型在现代 AI 应用中的生态如何构成、如何工作、如何与外部数据和工具协同。

我们希望通过这次分享，让大家建立起一个清晰的"AI 应用技术全景图"，理解目前主流 AI 技术栈的运行方式和原理。这样在未来业务开发中，可以更好地利用这些技术落地到实际场景，而不仅仅把大模型当成聊天工具使用。
-->

---
layout: default
---

# 什么是上下文（Context）？

<div class="grid grid-cols-2 gap-10 mt-6 items-center">

<div class="space-y-4">
  <div v-click class="glass-card p-5 border-l-4 !border-l-blue-500">
    <h3 class="text-lg font-bold mb-2 flex items-center gap-2">
      <carbon-time class="text-blue-400"/> 无长期记忆
    </h3>
    <p class="opacity-80 text-sm">LLM 本身不存储之前的对话状态，每一次交互都是独立的。</p>
  </div>

  <div v-click class="glass-card p-5 border-l-4 !border-l-purple-500">
    <h3 class="text-lg font-bold mb-2 flex items-center gap-2">
      <carbon-data-view-alt class="text-purple-400"/> 依赖当前窗口
    </h3>
    <p class="opacity-80 text-sm">所有的“记忆”都必须作为 Input (Prompt) 的一部分传入。</p>
  </div>

  <div v-click class="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-center font-bold ">
    Context = 模型做判断的"全部输入信息"
  </div>
</div>

<div v-click class="relative">
  <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
  <img src="/imgs/kiro-context.jpg" class="relative rounded-lg shadow-2xl border border-white/10" />
</div>

</div>

---
layout: default
---

# 主流大模型上下文窗口对比

<div class="mt-8 glass-card !p-0 overflow-hidden">

| 模型 | 上下文窗口 | 特点 |
|------|-----------|------|
| **Claude 3.5 Sonnet/Opus** | <span class="text-green-400 font-mono">200K – 1M</span> | <span class="opacity-90">大上下文能力最强，长文档推理稳定</span> |
| **GPT-4o / GPT-4o Mini** | <span class="text-blue-400 font-mono">128K – 200K</span> | <span class="opacity-90">多模态能力领先，工具生态完善</span> |
| **Gemini 2 Pro/Ultra** | <span class="text-purple-400 font-mono">~100K – 128K</span> | <span class="opacity-90">多模态强，Google 系生态集成好</span> |
| **Grok 2** | <span class="text-gray-400 font-mono">~128K</span> | <span class="opacity-90">擅长专业知识 & 分析类任务</span> |
| **Llama 3.1** (开源) | <span class="text-yellow-400 font-mono">128K+</span> | <span class="opacity-90">开源中表现优秀</span> |

</div>

<div v-click class="mt-6 flex items-start gap-3 text-sm opacity-80 p-4 bg-white/5 rounded-lg">
  <carbon-information class="text-xl text-blue-400 min-w-[20px]" />
  <div>
    <strong>上下文包含：</strong> 访问的文件、生成的文件、消息记录、System Prompt (MCP, Rules, Project structure...)
  </div>
</div>

---
layout: default
---

# Prompt Engineering

<div class="grid grid-cols-2 gap-8 mt-12 h-[60%]">

<div v-click class="glass-card flex flex-col justify-center h-full relative overflow-hidden group">
  <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition duration-500 transform group-hover:scale-110">
    <carbon-code class="text-8xl" />
  </div>
  
  <h3 class="text-2xl font-bold mb-6 text-blue-400">基本技巧</h3>
  <ul class="space-y-4 text-lg">
    <li class="flex items-center gap-3"><carbon-user-role class="text-gray-400"/> <strong>Role</strong> (角色定义)</li>
    <li class="flex items-center gap-3"><carbon-task class="text-gray-400"/> <strong>Task</strong> (任务描述)</li>
    <li class="flex items-center gap-3"><carbon-warning-alt class="text-gray-400"/> <strong>Constraints</strong> (约束条件)</li>
  </ul>
</div>

<div v-click class="glass-card flex flex-col justify-center h-full relative overflow-hidden group">
  <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition duration-500 transform group-hover:scale-110">
    <carbon-book class="text-8xl" />
  </div>

  <h3 class="text-2xl font-bold mb-6 text-purple-400">学习资源</h3>
  <ul class="space-y-3">
    <li><a href="https://www.promptingguide.ai/" target="_blank" class="hover:text-blue-400 transition flex items-center gap-2"><carbon-link /> Prompt Engineering 101</a></li>
    <li><a href="https://github.com/openai/openai-cookbook" target="_blank" class="hover:text-blue-400 transition flex items-center gap-2"><carbon-logo-github /> OpenAI Cookbook</a></li>
    <li><a href="https://python.langchain.com/docs/modules/model_io/prompts/" target="_blank" class="hover:text-blue-400 transition flex items-center gap-2"><carbon-document /> LangChain Prompts</a></li>
    <li><a href="https://github.com/ai-boost/awesome-prompts" target="_blank" class="hover:text-blue-400 transition flex items-center gap-2"><carbon-star /> Awesome Prompts</a></li>
  </ul>
</div>

</div>

---
layout: center
class: text-center
---

# RAG
## Retrieval-Augmented Generation

<div class="mt-8 text-2xl opacity-80 font-light">
  让大模型在回答之前先<span class="text-green-400 font-bold">"查资料"</span>
</div>

<div class="mt-12 flex justify-center opacity-50">
  <div class="w-20 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
</div>

---
layout: default
---

# RAG 是什么？

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="glass-card p-6 border-t-4 !border-t-red-500">
  <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-red-400">
    <carbon-help-filled /> 痛点
  </h3>
  <ul class="space-y-3 opacity-90">
    <li class="flex items-start gap-2"><carbon-close-filled class="mt-1 text-red-500/50" /> 公司海量私有文档 AI 不知道</li>
    <li class="flex items-start gap-2"><carbon-close-filled class="mt-1 text-red-500/50" /> 产品文档、API、内部 WiKi 无法访问</li>
    <li class="flex items-start gap-2"><carbon-close-filled class="mt-1 text-red-500/50" /> 强行回答会导致严重的"幻觉"</li>
  </ul>
</div>

<div v-click class="glass-card p-6 border-t-4 !border-t-green-500">
  <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
    <carbon-checkmark-filled /> 价值
  </h3>
  <ul class="space-y-3 opacity-90">
    <li class="flex items-start gap-2"><carbon-checkmark-filled class="mt-1 text-green-500/50" /> 实时补充上下文 Knowledge</li>
    <li class="flex items-start gap-2"><carbon-checkmark-filled class="mt-1 text-green-500/50" /> 显著降低模型幻觉</li>
    <li class="flex items-start gap-2"><carbon-checkmark-filled class="mt-1 text-green-500/50" /> 知识库更新无需重新训练模型</li>
  </ul>
</div>

</div>

<div v-click class="mt-8 p-6 glass-card bg-green-500/5 flex items-center justify-center gap-4 text-green-200">
  <carbon-search class="text-2xl" />
  将 <span class="font-bold text-white">用户信息</span> + <span class="font-bold text-white">召回资料</span> 整合后交给 LLM 推理
</div>

---
layout: default
---

# RAG 流程图

<div class="flex items-center justify-between gap-2 mt-20 px-8 relative">

  <!-- Connecting Line -->
  <div class="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 -z-10 transform -translate-y-1/2"></div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 hover:scale-105 transition">
    <carbon-user class="text-3xl text-blue-400 mb-2" />
    <span class="font-bold">用户问题</span>
  </div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 hover:scale-105 transition">
    <carbon-search-locate class="text-3xl text-purple-400 mb-2" />
    <span class="font-bold">向量检索</span>
    <span class="text-xs opacity-50 mt-1">Embedding Search</span>
  </div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 hover:scale-105 transition">
    <carbon-document-multiple-01 class="text-3xl text-green-400 mb-2" />
    <span class="font-bold">Relevant Docs</span>
    <span class="text-xs opacity-50 mt-1">Top-K Chunks</span>
  </div>

  <div v-click class="glass-card w-48 h-32 flex flex-col items-center justify-center p-4 text-center z-10 border-orange-500/50 hover:scale-105 transition shadow-[0_0_15px_rgba(249,115,22,0.3)]">
    <carbon-bot class="text-3xl text-orange-400 mb-2" />
    <span class="font-bold">LLM 回答</span>
    <span class="text-xs opacity-50 mt-1">Based on Context</span>
  </div>

</div>

---
layout: default
---

# 传统 RAG 存在的缺陷

<div class="grid grid-cols-2 gap-12 mt-12">

<div class="space-y-4">
  <div v-click class="glass-card p-4 flex items-center gap-3 border-l-2 !border-l-red-500/50">
    <carbon-warning class="text-red-400 text-xl" />
    <span>向量检索不精准，容易召回噪声</span>
  </div>
  <div v-click class="glass-card p-4 flex items-center gap-3 border-l-2 !border-l-red-500/50">
    <carbon-cut class="text-red-400 text-xl" />
    <span>文档切片（Chunking）导致上下文结构丢失</span>
  </div>
  <div v-click class="glass-card p-4 flex items-center gap-3 border-l-2 !border-l-red-500/50">
    <carbon-network-2 class="text-red-400 text-xl" />
    <span>缺乏实体间关系，难以进行多跳推理</span>
  </div>
</div>

<div v-click class="glass-card p-6 bg-red-500/5 border border-red-500/20">
  <h3 class="text-lg font-bold text-red-300 mb-4">典型案例：切片导致的语义断裂</h3>
  
  <div class="text-sm opacity-80 mb-2">原文：</div>
  <div class="p-3 bg-black/20 rounded italic mb-4 border-l-2 border-gray-500">
    "我昨天把手机掉进水里了，所以今天不能联系你。"
  </div>

  <div class="grid grid-cols-1 gap-2">
    <div class="p-2 bg-red-500/10 rounded flex justify-between items-center">
      <span>Chunk A: 掉进水里</span> 
      <span class="text-xs bg-red-500/20 px-2 py-1 rounded">原因</span>
    </div>
    <div class="p-2 bg-red-500/10 rounded flex justify-between items-center">
      <span>Chunk B: 无法联系</span>
      <span class="text-xs bg-red-500/20 px-2 py-1 rounded">结果</span>
    </div>
  </div>
  
  <div class="mt-4 text-sm text-red-200">
    <carbon-arrow-down class="inline mb-1"/> 检索时可能只找回 B，模型不知道 A 的存在，因果链断裂。
  </div>
</div>

</div>

---
layout: default
---

# GraphRAG
<div class="text-sm opacity-60 mb-8">传统 RAG 的结构性升级</div>

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="glass-card p-6 border-l-4 !border-l-red-500/50">
  <h3 class="text-lg font-bold text-red-300 mb-4 flex items-center gap-2">
    <carbon-warning /> 传统 RAG 的问题
  </h3>
  <ul class="space-y-2 text-sm opacity-80">
    <li>• 切片 → 嵌入 → 语义检索</li>
    <li>• 丢失结构、依赖、层级关系</li>
    <li>• 只能"一跳检索"</li>
    <li>• 无法理解实体间关系</li>
  </ul>
</div>

<div class="glass-card p-6 border-l-4 !border-l-green-500/50 bg-green-500/5">
  <h3 class="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
    <carbon-network-3 /> GraphRAG 的优势
  </h3>
  <ul class="space-y-2 text-sm opacity-80">
    <li>• 抽取实体（Entity）与关系（Relation）</li>
    <li>• 构建知识图谱</li>
    <li>• 支持多跳推理</li>
    <li>• 更精准召回</li>
  </ul>
</div>

</div>

<div class="mt-8 glass-card !p-0 overflow-hidden text-sm">

| 能力 | 传统 RAG | GraphRAG |
|------|---------|----------|
| **理解结构关系** | <span class="text-red-400">❌</span> | <span class="text-green-400">✔</span> |
| **多跳推理** | <span class="text-red-400">❌</span> | <span class="text-green-400">✔</span> |
| **长文档稳定性** | <span class="text-yellow-400">中等</span> | <span class="text-green-400">高</span> |
| **召回精准度** | <span class="text-red-400">容易有噪声</span> | <span class="text-green-400">显著提升</span> |
| **适用场景** | FAQ、短文档 | 复杂文档、系统依赖、技术知识库 |

</div>

<!--
我们刚刚提到传统 RAG 最大的问题之一，就是"语义切片之后，上下文关系被打断"。
RAG 能找到相关内容，但并不理解文档结构、实体关系、引用链，也无法执行多跳推理。
GraphRAG 解决的，就是传统 RAG 的"结构性缺陷"。

GraphRAG 通过构建知识图谱，让模型不仅能找到相关内容，还能理解内容之间的关系。
这对于复杂文档、技术知识库、系统依赖分析等场景特别有用。
-->

---
layout: default
---

# RAG 的实际应用场景

<div class="grid grid-cols-2 gap-8 mt-12">

<div class="glass-card p-6 bg-green-500/5">
  <h3 class="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
    <carbon-checkmark-filled /> 适合的场景
  </h3>
  <ul class="space-y-3 text-sm opacity-90">
    <li>• 知识库问答（FAQ、文档检索）</li>
    <li>• AI 客服系统</li>
    <li>• SDK 文档 + Demo 代码生成</li>
    <li>• 跨语言代码生成</li>
  </ul>
</div>

<div class="glass-card p-6 bg-red-500/5">
  <h3 class="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
    <carbon-close-filled /> 不适合的场景
  </h3>
  <ul class="space-y-3 text-sm opacity-90">
    <li>• 需要明确 Action 的严谨场景</li>
    <li>• 实时系统操作</li>
    <li>• 精准的代码定位与修改</li>
  </ul>
</div>

</div>

<div class="mt-8 p-4 bg-blue-500/10 rounded-lg text-sm">
  <div class="flex items-start gap-3">
    <carbon-idea class="text-blue-400 text-xl mt-1" />
    <div>
      <strong class="text-blue-300">演进案例：</strong> 早期 Cursor 的 Code Embedding 基于 RAG，但代码生成质量不高且幻觉多。
      后来 Anthropic 在 Coding Agent 中改用 <span class="text-green-400 font-mono">search</span> / <span class="text-green-400 font-mono">grep</span> 等工具精准定位代码（模拟人类开发路径），
      现在市面上的 AI Coding Agent 都采用这种模式，精准度大幅提升。
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

# 大模型如何访问外部数据<br/>与执行外部动作

<div class="mt-8 text-2xl font-light opacity-80">
  从 <span class="text-blue-400">ReAct</span> 到 <span class="text-purple-400">Function Calling</span> 到 <span class="text-green-400">MCP</span>
</div>

<div class="mt-12 flex justify-center gap-4 text-4xl opacity-50">
  <carbon-tools />
  <carbon-iot-connect />
  <carbon-bot />
</div>

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

---
layout: center
class: text-center
---

# MCP
## Model Context Protocol

<div class="mt-8 text-xl font-light opacity-90">
  如何让工具 <span class="text-purple-400 font-bold">"像插件一样"</span> 可以给任何 LLM 使用？
</div>

<div class="mt-12 glass-card inline-block px-12 py-6 text-2xl font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/10">
  <carbon-plug class="inline-block mr-3 text-4xl align-middle" />
  MCP = "AI 世界的 USB 协议"
</div>

---
layout: default
---

# MCP 核心能力

<div class="grid grid-cols-3 gap-6 mt-12">

<div class="glass-card p-6 text-center hover:bg-blue-500/10 transition duration-300">
  <div class="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
    <carbon-api class="text-3xl text-blue-400" />
  </div>
  <h3 class="text-lg font-bold mb-2">统一注册协议</h3>
  <p class="text-sm opacity-70">标准化工具定义和注册方式，一次编写，到处运行。</p>
</div>

<div class="glass-card p-6 text-center hover:bg-green-500/10 transition duration-300">
  <div class="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
    <carbon-folder class="text-3xl text-green-400" />
  </div>
  <h3 class="text-lg font-bold mb-2">统一资源访问</h3>
  <p class="text-sm opacity-70">文件系统、数据库、API 资源的标准访问接口。</p>
</div>

<div class="glass-card p-6 text-center hover:bg-purple-500/10 transition duration-300">
  <div class="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
    <carbon-connection-signal class="text-3xl text-purple-400" />
  </div>
  <h3 class="text-lg font-bold mb-2">统一调用规范</h3>
  <p class="text-sm opacity-70">跨平台、跨模型的调用标准，解耦模型与工具。</p>
</div>

</div>

<div class="mt-8 text-center text-sm opacity-50">
  例如：PostgreSQL MCP Server • Filesystem MCP Server • Slack MCP Server
</div>

---
layout: default
---

# MCP vs Function Calling

<div class="mt-12 glass-card !p-0 overflow-hidden text-sm">

| 特性 | Function Calling | MCP |
|------|-----------------|-----|
| **本质** | <span class="text-blue-400">LLM 能力</span> (如何调用) | <span class="text-purple-400">生态协议</span> (如何接入) |
| **执行者** | LLM Client Runtime | Independent MCP Server |
| **复用性** | 单一应用内 | **跨模型、跨应用共享** |
| **关系** | 消费端 | 供应端 |
| **位置** | 推理链内部 | 工具生态层 |

</div>

<div class="mt-8 p-4 bg-blue-500/10 rounded-lg flex items-center gap-4">
  <carbon-idea class="text-blue-400 text-xl" />
  <span>它们并非二选一，而是互补：LLM 通过 Function Calling 能力去调用 MCP Server 提供的工具。</span>
</div>

---
layout: default
---

# Agent Skills
<div class="text-sm opacity-60 mb-8">Anthropic 的可复用任务单元（2025.10.16）</div>

<div class="grid grid-cols-2 gap-8 mt-12 items-center">

<div class="space-y-6">
  <div class="glass-card p-6 border-l-4 !border-l-purple-500">
    <h3 class="text-lg font-bold text-purple-300 mb-3">核心特点</h3>
    <ul class="space-y-2 text-sm opacity-90">
      <li class="flex items-center gap-2"><carbon-checkmark class="text-green-500/70" /> 结构化的输入输出</li>
      <li class="flex items-center gap-2"><carbon-checkmark class="text-green-500/70" /> 稳定的函数式调用</li>
      <li class="flex items-center gap-2"><carbon-checkmark class="text-green-500/70" /> 可复用的任务单元</li>
      <li class="flex items-center gap-2"><carbon-checkmark class="text-green-500/70" /> 不参与上下文（独立运行）</li>
    </ul>
  </div>

  <div class="glass-card p-6 bg-blue-500/5">
    <h3 class="text-lg font-bold text-blue-300 mb-3">适用场景</h3>
    <ul class="space-y-2 text-sm opacity-90">
      <li>• 固定流程的重复性任务</li>
      <li>• 标准化的数据处理</li>
      <li>• 可以调用 MCP 工具</li>
    </ul>
  </div>
</div>

<div class="glass-card p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
  <h3 class="text-xl font-bold mb-4 text-center">Skills vs MCP vs Function Calling</h3>
  <div class="space-y-3 text-sm">
    <div class="flex items-center gap-3">
      <div class="w-32 text-purple-400 font-bold">Skills</div>
      <div class="opacity-80">任务封装层</div>
    </div>
    <div class="flex items-center gap-3">
      <div class="w-32 text-blue-400 font-bold">Function Calling</div>
      <div class="opacity-80">调用机制</div>
    </div>
    <div class="flex items-center gap-3">
      <div class="w-32 text-green-400 font-bold">MCP</div>
      <div class="opacity-80">工具生态协议</div>
    </div>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

<div class="text-6xl mb-8">✌️</div>

# 恭喜！

<div class="text-xl mt-8 opacity-90 leading-relaxed">
  到这里你已经掌握了如何使用 LLM<br/>
  做一个能够<span class="text-green-400 font-bold">感知</span>和<span class="text-blue-400 font-bold">调用外部工具</span>的智能体
</div>

<div class="mt-12 glass-card inline-block px-8 py-4 bg-gradient-to-r from-red-500/20 to-orange-500/20">
  <div class="text-2xl font-bold">不再是简单的聊天机器人 🎉</div>
  <div class="text-lg mt-2 opacity-80">它可以帮你执行任务了！</div>
</div>

<div class="mt-12 text-sm opacity-50">
  接下来进入"高阶"部分 →
</div>

---
layout: center
class: text-center
---

# Agent
## 从工具调用到自主任务执行

<div class="mt-12 grid grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
  <div class="glass-card p-4">
    <carbon-search class="text-2xl text-blue-400 mb-2"/>
    <div class="font-bold">感知</div>
    <div class="text-xs opacity-60">Observation</div>
  </div>
  <div class="glass-card p-4">
    <carbon-idea class="text-2xl text-yellow-400 mb-2"/>
    <div class="font-bold">思考</div>
    <div class="text-xs opacity-60">Planning</div>
  </div>
  <div class="glass-card p-4">
    <carbon-tools class="text-2xl text-green-400 mb-2"/>
    <div class="font-bold">行动</div>
    <div class="text-xs opacity-60">Action</div>
  </div>
  <div class="glass-card p-4">
    <carbon-text-link class="text-2xl text-purple-400 mb-2"/>
    <div class="font-bold">反馈</div>
    <div class="text-xs opacity-60">Reflection</div>
  </div>
</div>

---
layout: default
---

# 为什么我们需要 Agent？

<div class="grid grid-cols-2 gap-12 mt-8 items-center h-[70%]">

<div class="relative">
  <div class="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
  <div class="glass-card p-6 relative">
    <h3 class="font-bold mb-4 flex items-center gap-2"><carbon-flow-stream /> 典型业务流程</h3>
    <ul class="space-y-3 text-sm">
      <li class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">1</div> 查数据库 (SQL)</li>
      <li class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">2</div> 过滤结果 (Filter)</li>
      <li class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">3</div> 生成报告 (Gen)</li>
      <li class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">4</div> 写入系统 (API)</li>
      <li class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">5</div> 邮件通知 (SMTP)</li>
    </ul>
    <div class="mt-4 text-xs text-red-300 bg-red-500/10 p-2 rounded">
      🚫 靠人写 Prompt 一步步操作是不可能的
    </div>
  </div>
</div>

<div class="text-center">
  <h3 class="text-3xl font-bold mb-6 text-gradient">Agent 的价值</h3>
  <div class="glass-card p-6 bg-purple-500/10 border-purple-500/30">
    <div class="text-xl font-bold mb-2">"持续工作能力"</div>
    <p class="opacity-70 text-sm">Autonomous Task Execution</p>
  </div>
  <div class="mt-6 text-sm opacity-80 leading-relaxed">
    在没有人工干预的情况下<br/>独立完成多步骤、多依赖的复杂任务链
  </div>
</div>

</div>

---
layout: default
---

# Agent 运行模式

<div class="grid grid-cols-2 gap-8 mt-12">

<div class="glass-card p-6 hover:border-blue-500/50 transition duration-300">
  <h3 class="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
    <carbon-chemistry /> ReAct 模式
  </h3>
  <ul class="space-y-2 text-sm opacity-80 mb-4">
    <li>• 边想边做 (Reasoning + Acting)</li>
    <li>• 适合灵活的检索、探索性任务</li>
    <li>• ⚠️ 长链路容易跑偏</li>
  </ul>
</div>

<div class="glass-card p-6 hover:border-green-500/50 transition duration-300 bg-green-500/5">
  <h3 class="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
    <carbon-list-checked /> Plan & Execute
  </h3>
  <ul class="space-y-2 text-sm opacity-80 mb-4">
    <li>• 先规划全局，再逐个执行</li>
    <li>• 状态可控、可回滚、可审计</li>
    <li>• ✅ 企业级应用首选方案</li>
  </ul>
</div>

</div>

<div class="mt-8 text-center">
  <img src="/imgs/plan-and-execute.png" class="h-32 mx-auto rounded-lg shadow-lg opacity-80 hover:opacity-100 transition" />
</div>

---
layout: default
---

# Multi-Agent 协作

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="space-y-4">
  <div class="glass-card p-3 flex items-center gap-3">
    <div class="p-2 bg-blue-500/20 rounded text-blue-400"><carbon-search /></div>
    <div>检索专家<div class="text-xs opacity-50">Researcher</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3">
    <div class="p-2 bg-yellow-500/20 rounded text-yellow-400"><carbon-edit /></div>
    <div>写作专家<div class="text-xs opacity-50">Writer</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3">
    <div class="p-2 bg-green-500/20 rounded text-green-400"><carbon-checkmark-outline /></div>
    <div>审核专家<div class="text-xs opacity-50">Reviewer</div></div>
  </div>
  <div class="glass-card p-3 flex items-center gap-3">
    <div class="p-2 bg-purple-500/20 rounded text-purple-400"><carbon-document /></div>
    <div>格式化专家<div class="text-xs opacity-50">Formatter</div></div>
  </div>
</div>

<div class="glass-card p-4 flex items-center justify-center bg-black/40">
  <img src="/imgs/agent-working.gif" class="rounded shadow-2xl max-h-64" />
</div>

</div>

<div class="mt-6 flex items-center justify-center gap-2 text-sm opacity-70">
  <carbon-network-4 /> Agent to Agent (A2A) Protocol 
</div>

<!--
随着任务越来越复杂，我们开始使用 Multi-Agent ——
让多个 Agent 分工协作，像一个组织一样工作。

例如一个文档生成任务可能包含：
- 负责检索的 Agent
- 负责总结的 Agent
- 负责格式化的 Agent
- 负责检查质量的 Agent

他们之间通过协议协调工作。
-->

---
layout: default
---

# A2A 协议 & Agentic 应用

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="glass-card p-6">
  <h3 class="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
    <carbon-network-4 /> A2A Protocol
  </h3>
  <div class="text-sm opacity-80 mb-4">
    Google 于 <span class="text-green-400">2025 年 4 月 9 日</span> 发布的 Agent 间通信协议
  </div>
  <img src="/imgs/how-a2a-works.png" class="rounded-lg shadow-lg border border-white/10" />
</div>

<div class="glass-card p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
  <h3 class="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
    <carbon-application /> Agentic 应用
  </h3>
  <div class="text-sm opacity-90 space-y-3">
    <p>大量的 Agent "员工"，每个负责具体任务：</p>
    <ul class="space-y-2 pl-4">
      <li class="flex items-center gap-2"><carbon-document class="text-blue-400" /> 能读文档</li>
      <li class="flex items-center gap-2"><carbon-data-view class="text-green-400" /> 能看日志</li>
      <li class="flex items-center gap-2"><carbon-task class="text-yellow-400" /> 能执行任务</li>
      <li class="flex items-center gap-2"><carbon-warning class="text-red-400" /> 能自动发现问题</li>
      <li class="flex items-center gap-2"><carbon-collaborate class="text-purple-400" /> 能与其他 Agent 协作</li>
    </ul>
    <div class="mt-4 p-3 bg-white/5 rounded text-xs">
      <strong>工具栈：</strong> RAG + MCP + GraphRAG + Tool Calling
    </div>
  </div>
</div>

</div>

---
layout: default
---

# Agent 开发工具

<div class="grid grid-cols-2 gap-8 mt-12">

<div class="glass-card p-6 hover:border-blue-500/50 transition">
  <div class="flex items-center gap-3 mb-6">
    <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
      <carbon-code class="text-2xl text-blue-400" />
    </div>
    <h3 class="text-xl font-bold">专业 Agent 框架</h3>
  </div>
  <div class="text-sm opacity-70 mb-4">工程师使用，最适合真实落地</div>
  <ul class="space-y-2 text-sm">
    <li class="flex items-center gap-2"><carbon-dot-mark class="text-blue-400" /> <strong>LlamaIndex</strong> - 数据框架</li>
    <li class="flex items-center gap-2"><carbon-dot-mark class="text-blue-400" /> <strong>LangChain</strong> - 应用框架</li>
    <li class="flex items-center gap-2"><carbon-dot-mark class="text-blue-400" /> <strong>LangGraph</strong> - 工作流编排</li>
    <li class="flex items-center gap-2"><carbon-dot-mark class="text-blue-400" /> <strong>AutoGen</strong> - 微软多智能体</li>
  </ul>
</div>

<div class="glass-card p-6 hover:border-green-500/50 transition">
  <div class="flex items-center gap-3 mb-6">
    <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
      <carbon-flow class="text-2xl text-green-400" />
    </div>
    <h3 class="text-xl font-bold">可视化平台</h3>
  </div>
  <div class="text-sm opacity-70 mb-4">产品与业务同样可用</div>
  <ul class="space-y-2 text-sm">
    <li class="flex items-center gap-2"><carbon-dot-mark class="text-green-400" /> <strong>Coze</strong> - 字节跳动</li>
    <li class="flex items-center gap-2"><carbon-dot-mark class="text-green-400" /> <strong>n8n</strong> - 工作流自动化</li>
    <li class="flex items-center gap-2"><carbon-dot-mark class="text-green-400" /> <strong>Flowise</strong> - 低代码 AI 应用</li>
  </ul>
</div>

</div>

<div class="mt-8 text-center text-sm opacity-50">
  选择合适的工具，取决于团队技术栈和业务场景
</div>

---
layout: default
---

# 总结：从 LLM 到 Agent

<div class="flex flex-col gap-4 mt-8">

<div v-click class="glass-card p-4 flex items-center gap-6">
  <div class="font-bold w-32 text-right text-gray-400">LLM</div>
  <div class="h-8 w-[2px] bg-gray-700"></div>
  <div class="opacity-80">大脑，负责推理与生成</div>
</div>

<div v-click class="glass-card p-4 flex items-center gap-6">
  <div class="font-bold w-32 text-right text-blue-400">Context</div>
  <div class="h-8 w-[2px] bg-blue-500/50"></div>
  <div class="opacity-80">决定模型能理解什么，AI 应用的地基</div>
</div>

<div v-click class="glass-card p-4 flex items-center gap-6">
  <div class="font-bold w-32 text-right text-green-400">RAG / GraphRAG</div>
  <div class="h-8 w-[2px] bg-green-500/50"></div>
  <div class="opacity-80">记忆，解决知识更新与结构理解</div>
</div>

<div v-click class="glass-card p-4 flex items-center gap-6">
  <div class="font-bold w-32 text-right text-purple-400">Tools / MCP</div>
  <div class="h-8 w-[2px] bg-purple-500/50"></div>
  <div class="opacity-80">手脚，让模型拥有"行动能力"</div>
</div>

<div v-click class="glass-card p-4 flex items-center gap-6 bg-gradient-to-r from-orange-500/10 to-transparent">
  <div class="font-bold w-32 text-right text-orange-400 text-xl">Agent</div>
  <div class="h-8 w-[2px] bg-orange-500"></div>
  <div class="font-bold">自主规划 + 决策 + 任务执行</div>
</div>

</div>

---
layout: default
---

# 技术演进解决的三个核心问题

<div class="grid grid-cols-3 gap-6 mt-16">

<div v-click class="glass-card p-8 text-center hover:scale-105 transition duration-300">
  <div class="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
    <carbon-cognitive class="text-4xl text-blue-400" />
  </div>
  <h3 class="text-2xl font-bold mb-3 text-blue-400">如何理解</h3>
  <div class="text-sm opacity-70">Context Engineering</div>
</div>

<div v-click class="glass-card p-8 text-center hover:scale-105 transition duration-300">
  <div class="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
    <carbon-data-base class="text-4xl text-green-400" />
  </div>
  <h3 class="text-2xl font-bold mb-3 text-green-400">如何知道</h3>
  <div class="text-sm opacity-70">RAG / GraphRAG</div>
</div>

<div v-click class="glass-card p-8 text-center hover:scale-105 transition duration-300">
  <div class="w-20 h-20 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
    <carbon-tools class="text-4xl text-purple-400" />
  </div>
  <h3 class="text-2xl font-bold mb-3 text-purple-400">如何做事</h3>
  <div class="text-sm opacity-70">Tools / MCP / Agent</div>
</div>

</div>

<div v-click class="mt-12 text-center">
  <div class="glass-card inline-block px-12 py-6 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-purple-500/20">
    <div class="text-2xl font-bold mb-2">我们要构建的不是"聊天机器人"</div>
    <div class="text-lg opacity-80">而是能够获取知识、调用工具、执行任务、自主规划的<span class="text-gradient font-bold">智能体</span></div>
  </div>
</div>

<!--
今天我们从大模型最基础的上下文机制开始，一路讲到了现代 AI 应用的完整能力栈。

我们看到一个非常清晰的技术演进路线，本质上解决的是三个核心问题：
1. 模型如何理解（Context）
2. 模型如何知道（RAG）
3. 模型如何做事（Tools / MCP / Agent）

最终，我们要构建的不是一个"聊天机器人"，而是一个能够真正落地业务价值的智能体（Agent）。
-->

---
layout: end
---

# 谢谢！

<div class="text-xl mt-8 font-light opacity-80">
  Let's build the <span class="text-gradient font-bold">Agentic Future</span> together.
</div>

<div class="abs-br m-6 flex gap-4">
  <carbon-logo-github class="text-2xl opacity-50 hover:opacity-100 transition cursor-pointer" />
  <carbon-logo-twitter class="text-2xl opacity-50 hover:opacity-100 transition cursor-pointer" />
</div>
