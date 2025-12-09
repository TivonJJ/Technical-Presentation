# 现代 AI 架构演进：从 LLM 到 Agent 的能力扩展路径

<teleprompter>
大家好，今天的分享主题是：大模型如何理解、连接、并最终执行我们的业务需求，从而进化出真正可用的 AI Agent。
过去一年，AI 技术出现了非常明显的演进路线：
从只会对话的 LLM
到能访问外部知识的 RAG
到能调用工具的 Function Calling / MCP
最终发展到可以自主规划任务的 Agent
对我们工程团队来说，理解这条演进路径非常重要。因为它不仅能帮助我们判断一个 AI 能做什么，还能帮助我们设计未来的 AI 系统架构。
今天的分享不会偏重模型原理，而是重点回答三个核心问题：
大模型如何理解信息与上下文？
大模型如何访问外部数据与外部系统？
如何进一步构建可自动协作的 Agent？
分享中会结合一些示例、架构图，还有几个 demo，帮助大家更直观理解这些能力如何落地。
</teleprompter>

## LLM 基础概念
大模型分为两类：
- 文本模型（GPT、Claude、Gemini Text）
- 多模态模型（GPT-4o、Claude 3.5、Gemini 2）

<block>展示一个大模型为背景的插画图片，前景是RAG,MCP,Agent等TAG或ICON<block>

<teleprompter>
在正式进入 RAG、工具调用、MCP 和 Agent 之前，我们先非常简单地讲一下 LLM —— 大语言模型。

其实这个大家都已经很熟悉了，从最早的 GPT 到现在各种多模态模型，各大厂商几乎都推出了自己的产品。

目前主流模型也非常丰富，比如我们开发最喜欢用的 Claude，以及在专业法律知识上表现很强的 Grok 等等。不同模型都有自己的特点、擅长的场景，以及不同的上下文支持和成本差异。

不过，这些模型本身并不是我们这次分享的重点，我们不会花时间去比较模型能力，而是把重心放在：这些模型在现代 AI 应用中的生态如何构成、如何工作、如何与外部数据和工具协同。

我们希望通过这次分享，让大家建立起一个清晰的“AI 应用技术全景图”，理解目前主流 AI 技术栈的运行方式和原理。这样在未来业务开发中，可以更好地利用这些技术落地到实际场景，而不仅仅把大模型当成聊天工具使用。
</teleprompter>

## 上下文与提示词工程（Context + Prompt Engineering）

### 什么是上下文（Context）？

- LLM 没有长期记忆
- 只依赖当前对话窗口进行推理
- 不同模型的上下文容量不同（影响成本与效果）

> Context = 模型做判断的“全部输入信息”

> 主流大模型上下文窗口对比（2025）

| 模型                           | 上下文窗口（Token）     | 特点                 |
| ---------------------------- | ---------------- | ------------------ |
| **Claude 3.5 Sonnet / Opus** | 200K – 1M        | 大上下文能力最强，长文档推理稳定   |
| **GPT-4o / GPT-4o Mini**     | 128K – 200K      | 多模态能力领先，工具生态完善     |
| **Gemini 2 Pro / Ultra**     | ~100K – 128K     | 多模态强，Google 系生态集成好 |
| **Grok 2**                   | ~128K            | 擅长专业知识 & 分析类任务     |
| **Llama 3.1**（开源）            | 128K（部分扩展到 200K） | 开源中表现优秀            |

这个与Kiro AI IDE 对话的记录就是上下文（Context），它包含了模型做判断的“全部输入信息”。包含访问的文件，生成的文件，发送和接收的消息，
以及我们看不到的隐藏的System Prompt (MCP, Rules，Project structure...)
![kiro-context.jpg](assets/imgs/kiro-context.jpg)

### Prompt Engineering
- Prompt 的基本技巧（role / task / constraints）
- 提示词优化工具（PromptFoo、LangSmith、OpenAI Playground 等）
- 学习资源
    1. [Prompt Engineering 101](https://www.promptingguide.ai/)
    2. [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
    3. [LangChain Prompt Engineering](https://python.langchain.com/docs/modules/model_io/prompts/prompt_templates/)
    4. [Awesome Prompts](https://github.com/ai-boost/awesome-prompts)

## RAG （Retrieval-Augmented Generation）
### RAG 是什么？
设想一下，我们公司有很多的文档，比如产品文档、API 文档、用户手册、FAQ 等，但是这些是私有的不在公网上。
所以AI是没有这些信息的，当我们用户去询问AI相关的问题的时候它无法回答，或者胡编乱造。
所以我们需要让大模型回答之前先“查资料”，将用户信息与召回的资料整合起来给LLM做推理，从而更精准地回答用户问题。

作用：
- 实时补充上下文
- 降低幻觉
- 内部私有知识库，无需训练即可更新知识

#### RAG流程图
<block>
用户问题 → 检索引擎（向量召回） → 选出相关文档 →  
把文档作为上下文提供给 LLM → LLM 基于真实数据回答
<block>

### 传统RAG存在的缺陷
- 向量检索不精准，噪声召回
- 文档被切片后丢失结构
- 实体/关系弱，难表达知识图谱
- 复杂问题需要多跳推理
- 大部分工程体验像“调参玄学”

> 假设公司有一份 100 页的 PDF，内容包含：产品架构、API 文档、用户手册、FAQ。
当用户问一个问题：“如何配置 OAuth 登录？”，
传统 RAG 会切片，然后靠向量检索找到似乎“语义相似”的片段，但可能缺少关键上下文，例如 API 的依赖章节。
最终导致模型回答不完整或断章取义。
这是 RAG 自身的局限，而不是 LLM 的问题。

> 想象你跟朋友说：
“我昨天把手机掉进水里了，所以今天不能联系你。”
如果我们把它切成两个片段，变成：
片段 A：我昨天把手机掉进水里了
片段 B：所以今天不能联系你
用户如果只检索到片段 B，模型看到的信息就是：
“今天不能联系你。”
但它不知道为什么，也不知道和手机有关。
同样，当 RAG 把文档切片后，很多“因果关系、上下逻辑、前提条件”都会被拆开。
模型只看到一个片段，但不知道它的前因后果，就容易回答错误或不完整。
这就是传统 RAG 中切片导致的典型语义丢失问题。

## GraphRAG
> 我们刚刚提到传统 RAG 最大的问题之一，就是“语义切片之后，上下文关系被打断”。
RAG 能找到相关内容，但并不理解文档结构、实体关系、引用链，也无法执行多跳推理。
GraphRAG 解决的，就是传统 RAG 的“结构性缺陷”。

GraphRAG 做了什么？

1. 传统 RAG：
   - 切片 → 嵌入 → 语义检索
   - 丢失结构、依赖、层级关系
   - 只能“一跳检索”

2. GraphRAG： 
   - 抽取实体（Entity）与关系（Relation）
   - 构建知识图谱
   - 支持多跳推理
   - 更精准召回

#### 传统 RAG vs GraphRAG 对比
| 能力       | 传统 RAG  | GraphRAG        |
| -------- | ------- | --------------- |
| 是否理解结构关系 | ❌       | ✔               |
| 多跳推理     | ❌       | ✔               |
| 面向长文档稳定性 | 中等      | 高               |
| 召回精准度    | 容易有噪声   | 显著提升            |
| 适用场景     | FAQ、短文档 | 复杂文档、系统依赖、技术知识库 |

### 扩展
RAG 非常适合知识库类，AI客服类场景。 甚至我们可以提供SDK文档和一些Demo代码，让LLM根据我们的这些文档和代码生成对接代码甚至任何语言的代码。
但是它并不适合一些严谨的场景，比如一些明确的Action，它本质上还是一个检索工具。
早期版本的Cursor/Copilot里面的Code Embedding功能，就是基于RAG的一个应用场景，但是那会儿代码生成质量并不高，而且幻觉特别多，之后anthropic最先在Coding Agent中抛弃了Rag概念
使用了search,grep等工具精准的定位代码，(模拟了人类真实开发路径)。之后市面上很多AI Coding Agent都开始使用这种模式,所以现在越来越精准

## 大模型如何访问外部数据与执行外部动作

### ReAct —— Reasoning + Action（LLM 工具调用的起点）

#### 一个极简的让大模型能调用外部数据的实现方式
````
System: 你是一个天气查询助手,你可以根据用户的问题查询天气。有以下工具可以调用：
- get_weather(city: str) -> str: 查询指定城市的天气

如果用户问了一个关于天气的问题，你需要调用 get_weather 工具，按照一下格式输出：
```
{"action": "get_weather", "city": {"name": "Beijing"}}
```
````
#### 再延伸到ReAct的概念
ReAct 的核心思想是：
> 模型自己规划要做什么，然后调用一个工具（Action），再根据结果继续推理。

举个例子，模型可能会这样思考：
1. 用户问了一个问题，我需要查一下数据库
2. 调用查询工具
3. 读取结果后再继续推理

这让模型具备了最早的“行动能力”。

```
Thought: 我需要获取天气数据  
Action: get_weather("Beijing")  
Observation: 北京天气晴朗，温度25摄氏度
Thought: 所以用户需要知道北京的天气
Final Answer: 北京天气晴朗，温度25摄氏度
```

缺点：
- 输出格式不稳定
- 识别成功率不稳定(特别是在一些小模型上)
- 过程和结果难控制
- 没有统一标准

### Function Calling
> ReAct 很强大，但不够稳定，于是厂商开始提供一种标准化方式，让模型以结构化格式调用工具，这就是 Function Calling。
它的本质是：
让模型输出 JSON 格式的“工具调用指令”，由系统执行，而不是自然语言描述。
> 2023 年 6 月，OpenAI 推出了 GPT-3.5/4 的 Function Calling 能力。


从此之后，各大厂商都开始跟进：
- Anthropic（Claude） 2024 年
- Google（Gemini） 2024 年
- Meta（Llama） 开源版也跟进
- Cohere、Mistral 等都支持 schema-based tool calling

OpenAI 官方文档的 Function Calling 示例：
```json Request
{
  "type": "function",
  "name": "get_weather",
  "description": "Retrieves current weather for the given location.",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City and country e.g. Bogotá, Colombia"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Units the temperature will be returned in."
      }
    },
    "required": ["location", "units"],
    "additionalProperties": false
  },
  "strict": true
}
```
```json Response
[
    {
        "id": "fc_12345xyz",
        "call_id": "call_12345xyz",
        "type": "function_call",
        "name": "get_weather",
        "arguments": "{\"location\":\"Paris, France\"}"
    },
    {
        "id": "fc_67890abc",
        "call_id": "call_67890abc",
        "type": "function_call",
        "name": "get_weather",
        "arguments": "{\"location\":\"Bogotá, Colombia\"}"
    },
    {
        "id": "fc_99999def",
        "call_id": "call_99999def",
        "type": "function_call",
        "name": "send_email",
        "arguments": "{\"to\":\"bob@email.com\",\"body\":\"Hi bob\"}"
    }
]
```

#### 流程图
![function_calling_flow.png](assets/imgs/function_calling_flow.png)![img.png](img.png)

#### **带来的好处**
1. 稳定 —— 不会像自然语言那样乱写
2. 安全 —— 只能调用你允许的工具
3. 可控 —— 系统负责执行，而不是模型
4. 开发体验更好 —— 你能精确知道模型要做什么

🍿 这推动了 AI 应用从“聊天助手”进入“任务执行器”的时代。

### MCP —— Model Context Protocol（现代模型工具生态的基石）

>MCP 的出现，解决了一个更底层、更基础的问题：
如何让工具“像插件一样”可以给任何 LLM 使用？
MCP（Model Context Protocol）是一套开放协议，用来标准化工具、文件系统、数据库、网页抓取、甚至工作流的接入方式。

MCP 的核心思想是：
- 工具不再绑定某个应用
- 工具变成一个“Server”
- 任何 LLM 都可以连接这个 Server
- 工具可以被多个 Agent/App 共享

MCP 提供三个关键能力：
- 统一的工具注册协议
- 统一的文件系统与资源访问接口
- 统一的调用规范

你可以把 MCP 理解为： `“AI 世界的 USB 协议”`

只要接上 MCP 的接口，任何模型就能使用这个工具。
例如：
- 文件读取 MCP Server
- 数据库 MCP Server
- 邮件 MCP Server
- 爬虫 MCP Server

#### 思考？既然MCP能调用外部工具，那么Function Calling和ReAct是不是没有存在的意义了呢？
首先给结果：完全不是！很多人包括我在早期都这样认为，直到我深入去使用和了解它之后发现它们完全不一样。

首先我们来对比一下MCP和Function Calling的区别：

| 项目      | Function Calling | MCP        |
| ------- | ---------------- | ---------- |
| 作用      | 调用工具的方式          | 工具的注册/接入协议 |
| 谁来执行    | LLM + Runtime    | MCP Server |
| 是否可复用   | 单一应用             | 多模型、多应用共享  |
| 是否必须二选一 | ❌                | 二者互补       |
| 位置      | 在推理链中            | 在工具生态层     |

#### ： Agent Skills
Anthropic 在 2025年10月16日 发布了一个新的功能：Skills。
它的本质是：
让模型以结构化格式调用工具，而不是自然语言描述。
它更像一个稳定的函数，输入输出都是稳定的，用于一些固定的可复用的重复性任务。 它的运行和mcp不同它不会参与上下文，它甚至可以调用mcp的工具。

---

✌🏻️恭喜您，到这里你已经掌握了如何使用LLM来做一个能够感知和调用外部工具的智能体，不再是一个简单的聊天机器人，它可以帮我执行任务了！

那么接下来我们进入“高阶”部分，如何将这些任务组合起来，如何让大模型处理复杂任务？如何让任务流程自主流转和决策？如何工程化一个智能体？

### Agent

#### 为什么我们需要 Agent？
> 真正的业务任务往往不是单一步骤，而是多步骤、多判断、多工具、多依赖的动态流程。
例如一个简单的业务需求: \
查数据库\
对结果做过滤\
生成报告\
写入系统\
发邮件通知\

如果每一步都靠人给 prompt，那不可能落地。
Agent 的价值就是让模型具备 “持续工作能力” —— 在没有人工干预的情况下，完成整个任务链路。

#### Agent 的组成结构（核心图示）



#### Agent 的运行模式（思考 + 行动）
1. ReAct模式
特点：
- 灵活
- 适合探索性任务
- 适合一次性/非连续性/短链路任务
- 但推理链可能不稳定

2. Plan & Execute模式（规划 + 执行）

![plan-and-execute.png](assets/imgs/plan-and-execute.png)

特点：
- 先规划完整任务
- 逐步/并行执行计划
优点：
- 稳定
- 可控
- 可审计
- 便于调试
目前最主流的企业级实现方案。常见的在我们使用Cursor,Claude Code, 等AI工具中都是改方式。
更多信息请参考Langchain的文章：[https://blog.langchain.com/planning-agents/](https://blog.langchain.com/planning-agents/)


#### Multi-Agent （多智能体协作）
> 随着任务越来越复杂，我们开始使用 Multi-Agent ——
让多个 Agent 分工协作，像一个组织一样工作。

例如一个文档生成任务可能包含：
- 负责检索的 Agent
- 负责总结的 Agent
- 负责格式化的 Agent
- 负责检查质量的 Agent

他们之间通过协议协调工作
**agent workflows**
![agent-working.gif](assets/imgs/agent-working.gif)

为了规范Agent之间的通信，Google首次在 2025 年 4 月 9 日 正式发布了 A2A（Agent to Agent）通信协议。
![how-a2a-works.png](assets/imgs/how-a2a-works.png)

#### Agenic应用
有大量的Agent员工，每个员工负责一个具体的任务，它们能：
- 能读文档
- 能看日志
- 能执行任务
- 能自动发现问题
- 能与其他员工(Agent)协作

而 RAG、MCP、GraphRAG、Tool Calling 就是这些Agent team所需的各种工具。这样构成一个完整的Agentic应用。

#### Agent 开发工具
1. 工程师使用的专业 Agent 框架 （最适合真实落地）
    - LlamaIndex
    - LangChain
    - LangGraph
    - AutoGen（微软）
2. 可视化 Agent / Workflow 平台（产品与业务同样可用）
   - Coze（字节）
   - n8n
   - Flowise

### 总结
> 今天我们从大模型最基础的上下文机制开始，一路讲到了现代 AI 应用的完整能力栈。

我们看到一个非常清晰的技术演进路线：
1. LLM：负责推理与理解，但缺乏实时知识与能力。
2. Context Engineering：决定模型能理解什么，是 AI 应用的地基。
3. RAG / GraphRAG：解决知识更新与结构理解问题，让模型不再凭“猜”。
4. ReAct / Function Calling / MCP：让模型拥有“行动能力”，能访问外部系统。
5. Agent：在知识与工具的基础上，实现自主规划、决策与任务执行。

这条路径本质上解决的，是三个核心问题：
1. 模型如何理解（Context）
2. 模型如何知道（RAG）
3. 模型如何做事（Tools / MCP / Agent）

最终，我们要构建的不是一个“聊天机器人”，而是一个能够：
- 获取知识
- 调用工具
- 执行任务
- 自主规划

🥳真正能落地业务价值的智能体（Agent）。