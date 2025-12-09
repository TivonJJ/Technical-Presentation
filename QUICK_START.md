# 快速启动指南

## 第一次使用

### 1. 安装依赖
```bash
cd agent-evolution
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

浏览器会自动打开 http://localhost:3030

### 3. 进入演讲者模式
在浏览器中按 `s` 键，会打开演讲者视图，包含：
- 当前页面
- 下一页预览
- 演讲者备注
- 计时器

## 常用快捷键

| 快捷键 | 功能 |
|--------|------|
| `Space` / `→` | 下一页/下一个动画 |
| `Shift+Space` / `←` | 上一页/上一个动画 |
| `s` | 演讲者模式 |
| `o` | 概览模式（查看所有页面） |
| `f` | 全屏模式 |
| `d` | 切换暗黑/明亮模式 |
| `g` | 跳转到指定页面 |
| `?` | 显示所有快捷键 |

## 演讲准备流程

### 步骤 1：熟悉内容
```bash
# 启动开发服务器
npm run dev

# 按 'o' 查看所有页面概览
# 按 's' 进入演讲者模式，查看备注
```

### 步骤 2：练习演讲
- 使用演讲者模式（按 `s`）
- 参考 `SPEAKER_NOTES.md` 中的话术
- 控制每页的时间节奏

### 步骤 3：准备备用方案
```bash
# 导出 PDF（需要安装 playwright）
npm run export

# 如果遇到问题，先安装 playwright
npx playwright install chromium
```

### 步骤 4：演讲前检查
参考 `CHECKLIST.md` 完成所有检查项

## 常见问题

### Q: 图片不显示？
**A:** 确保图片在 `public/imgs/` 目录下，并且路径正确（`/imgs/xxx.png`）

### Q: 如何修改主题颜色？
**A:** 编辑 `style.css` 中的 CSS 变量：
```css
:root {
    --slidev-theme-primary: #38bdf8;
    --slidev-theme-secondary: #a855f7;
}
```

### Q: 如何添加新页面？
**A:** 在 `slides.md` 中添加：
```markdown
---
layout: default
---

# 新页面标题

内容...
```

### Q: 演讲者备注不显示？
**A:** 确保在 markdown 中使用 HTML 注释：
```markdown
<!--
这里是演讲者备注
-->
```

### Q: 如何调整页面布局？
**A:** 使用不同的 layout：
- `default` - 默认布局
- `center` - 居中布局
- `cover` - 封面布局
- `intro` - 介绍页布局
- `end` - 结束页布局

### Q: 导出 PDF 失败？
**A:** 
1. 确保安装了 playwright：`npx playwright install chromium`
2. 如果还是失败，尝试：`npx slidev export slides.md --format pdf`

## 文件结构说明

```
agent-evolution/
├── slides.md              # 主演讲稿（修改这个文件）
├── style.css              # 自定义样式
├── slidev.config.ts       # Slidev 配置
├── package.json           # 依赖管理
├── CHECKLIST.md           # 演讲前检查清单
├── SPEAKER_NOTES.md       # 演讲者快速参考
├── QUICK_START.md         # 本文件
└── public/
    └── imgs/              # 图片资源
```

## 演讲技巧

### 1. 时间控制
- 总时长：40-50 分钟
- 每页平均：2-3 分钟
- 留出 5-8 分钟 Q&A

### 2. 互动技巧
- 在关键概念处停顿，观察听众反应
- 使用"你们有没有遇到过..."引发共鸣
- 在 RAG、Function Calling 等重点部分可以提问

### 3. 节奏把控
- 前 1/3：稍慢，建立基础概念
- 中间 1/3：正常节奏，展开技术细节
- 后 1/3：稍快，总结提升

### 4. 应对突发情况
- 技术故障：切换到 PDF 版本
- 时间不足：跳过 Agent Skills、开发工具详细介绍
- 时间充裕：展开实际案例，增加互动

## 演讲后

### 1. 收集反馈
- 记录听众提问
- 收集改进建议

### 2. 分享资料
```bash
# 构建静态网站
npm run build

# dist 目录可以部署到任何静态托管服务
# 或者直接分享 PDF 版本
```

### 3. 持续改进
- 更新演讲稿中的不足
- 补充新的案例
- 优化视觉效果

## 需要帮助？

- Slidev 文档：https://sli.dev/
- Penguin 主题：https://github.com/alvarosabu/slidev-theme-penguin
- Carbon Icons：https://carbondesignsystem.com/guidelines/icons/library/

祝演讲成功！🎉
