---
layout: default
---

# Prompt

<div class="grid grid-cols-2 gap-8 mt-12 h-[60%]">

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: -100 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } }"
  class="glass-card flex flex-col justify-center h-full relative overflow-hidden group">
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

<div v-click 
  v-motion
  :initial="{ opacity: 0, x: 100 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } }"
  class="glass-card flex flex-col justify-center h-full relative overflow-hidden group">
  <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition duration-500 transform group-hover:scale-110">
    <carbon-book class="text-8xl" />
  </div>

  <h3 class="text-2xl font-bold mb-6 text-purple-400">学习资源</h3>
  <ul class="space-y-3">
    <li><a href="https://www.promptingguide.ai/" target="_blank" class="hover:text-blue-400 transition flex items-center gap-2"><carbon-link /> Prompt Engineering</a></li>
    <li><a href="https://github.com/openai/openai-cookbook" target="_blank" class="hover:text-blue-400 transition flex items-center gap-2"><carbon-logo-github /> OpenAI Cookbook</a></li>
    <li><a href="https://python.langchain.com/docs/modules/model_io/prompts/" target="_blank" class="hover:text-blue-400 transition flex items-center gap-2"><carbon-document /> LangChain Prompts</a></li>
    <li><a href="https://github.com/ai-boost/awesome-prompts" target="_blank" class="hover:text-blue-400 transition flex items-center gap-2"><carbon-star /> Awesome Prompts</a></li>
  </ul>
</div>

</div>
