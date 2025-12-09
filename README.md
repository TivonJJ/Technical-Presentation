# 技术分享演讲稿项目

这是一个支持多个独立演讲内容的 Slidev 项目，每个演讲都有自己的配置和样式。

## 项目结构

```
presentations/
├── llm-to-agent/          # 从 LLM 到 Agent 的能力扩展路径
│   ├── slides.md          # 演讲内容
│   ├── config.ts          # Slidev 配置
│   └── style.css          # 专属样式
├── spec-driven-ai/        # Spec-Driven 与 AI Agent
│   ├── slides.md
│   ├── config.ts
│   └── style.css
```

## 使用方法

### 开发模式

```bash
# 运行 LLM to Agent 演讲
npm run dev:llm

# 运行 Spec-Driven AI 演讲
npm run dev:spec

# 运行原有的默认演讲（根目录）
npm run dev
```

### 构建生产版本

```bash
# 构建 LLM to Agent 演讲
npm run build:llm

# 构建 Spec-Driven AI 演讲
npm run build:spec
```

构建后的文件会输出到 `dist/` 目录下对应的子目录。

### 导出 PDF

```bash
# 导出 LLM to Agent 演讲为 PDF
npm run export:llm

# 导出 Spec-Driven AI 演讲为 PDF
npm run export:spec
```

PDF 文件会保存到 `exports/` 目录。

## 添加新演讲

1. 在 `presentations/` 下创建新文件夹，例如 `my-new-talk/`
2. 创建以下文件：
   - `slides.md` - 演讲内容
   - `config.ts` - Slidev 配置
   - `style.css` - 自定义样式
3. 在 `package.json` 中添加对应的脚本命令

### 示例配置

**config.ts**
```typescript
import { defineConfig } from '@slidev/types'

export default defineConfig({
  theme: 'default',  // 可以选择不同主题
  transition: 'fade',
  // 其他配置...
})
```

**style.css**
```css
/* 自定义样式 */
h1 {
  color: #your-color;
}
```

## 技术栈

- [Slidev](https://sli.dev/) - 为开发者打造的演示文稿工具
- Vue 3
- Vite
- UnoCSS

## 现有演讲

### 1. 从 LLM 到 Agent 的能力扩展路径
- **主题**: penguin
- **风格**: 现代、渐变、玻璃态
- **内容**: LLM、RAG、Function Calling、MCP、Agent

### 2. 代码的未来：Spec-Driven 与 AI Agent
- **主题**: default
- **风格**: 简洁、绿蓝配色
- **内容**: Spec-Driven 开发、AI Agent 协作

## 迁移说明

原有的 `slides.md` 内容需要完整复制到 `presentations/llm-to-agent/slides.md` 中。
原有的 `style.css` 已经迁移到 `presentations/llm-to-agent/style.css`。
