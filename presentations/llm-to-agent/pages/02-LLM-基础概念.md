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
