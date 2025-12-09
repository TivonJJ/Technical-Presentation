# 🎯 从这里开始

欢迎使用"现代 AI 架构演进：从 LLM 到 Agent 的能力扩展路径"演讲稿！

## 📋 第一步：安装依赖

```bash
npm install
```

## 🚀 第二步：启动演示

```bash
npm run dev
```

浏览器会自动打开 http://localhost:3030

## 📚 第三步：熟悉内容

### 推荐阅读顺序

1. **先看演讲稿**
   - 在浏览器中浏览所有页面（按 `o` 进入概览模式）
   - 按 `s` 进入演讲者模式，查看每页的备注

2. **阅读演讲者参考**
   - 打开 `SPEAKER_NOTES.md`
   - 了解每个章节的核心信息和话术建议

3. **查看检查清单**
   - 打开 `CHECKLIST.md`
   - 按照清单准备演讲

## 🎤 演讲快捷键

| 按键 | 功能 |
|------|------|
| `s` | 演讲者模式（最重要！） |
| `Space` | 下一页 |
| `o` | 概览所有页面 |
| `f` | 全屏 |
| `?` | 查看所有快捷键 |

## 📖 文档导航

### 必读文档
- 📄 **SPEAKER_NOTES.md** - 演讲者快速参考（核心话术和时间控制）
- ✅ **CHECKLIST.md** - 演讲前检查清单（确保万无一失）

### 参考文档
- 🚀 **QUICK_START.md** - 详细的使用指南
- 📘 **README.md** - 项目完整说明
- 📊 **OPTIMIZATION_SUMMARY.md** - 优化工作总结

## 🎯 演讲准备流程

### 第 1 天：熟悉内容
- [ ] 完整浏览所有页面
- [ ] 阅读所有演讲者备注
- [ ] 理解技术演进逻辑

### 第 2 天：练习演讲
- [ ] 使用演讲者模式练习
- [ ] 控制每页时间（参考 SPEAKER_NOTES.md）
- [ ] 记录需要改进的地方

### 第 3 天：完善细节
- [ ] 准备 Q&A 回答
- [ ] 导出 PDF 备用（`npm run export`）
- [ ] 完成 CHECKLIST.md 所有检查项

### 演讲当天
- [ ] 提前 30 分钟到场
- [ ] 测试设备连接
- [ ] 打开演讲者模式
- [ ] 深呼吸，开始演讲！

## 💡 快速提示

### 时间分配（总计 40-50 分钟）
- 开场 + LLM 基础：5 分钟
- RAG + GraphRAG：10 分钟
- 工具调用（ReAct/Function Calling/MCP）：12 分钟
- Agent + Multi-Agent：12 分钟
- 总结 + Q&A：8-10 分钟

### 重点章节
1. **RAG 的切片问题**（用"手机掉水里"的例子）
2. **Function Calling 流程图**（展示完整流程）
3. **MCP vs Function Calling**（强调互补关系）
4. **Plan & Execute 模式**（企业级 Agent 首选）

### 常见问题准备
在 `SPEAKER_NOTES.md` 末尾有 5 个常见问题的回答，建议提前准备。

## 🆘 遇到问题？

### 图片不显示
- 检查 `public/imgs/` 目录
- 确保路径是 `/imgs/xxx.png`

### 无法启动
```bash
# 删除 node_modules 重新安装
rm -rf node_modules package-lock.json
npm install
```

### 导出 PDF 失败
```bash
# 安装 playwright
npx playwright install chromium

# 然后再次尝试
npm run export
```

## 🎉 准备好了吗？

如果你已经：
- ✅ 安装了依赖
- ✅ 能正常启动演示
- ✅ 阅读了 SPEAKER_NOTES.md
- ✅ 完成了 CHECKLIST.md

那么你已经准备好进行一场精彩的演讲了！

---

**祝你演讲成功！** 🚀

如果有任何问题，参考 `QUICK_START.md` 获取更多帮助。
