import { defineConfig } from '@slidev/types'

export default defineConfig({
  theme: 'default',
  canvasWidth: 980,
  highlighter: 'shiki',
  lineNumbers: false,
  drawings: {
    enabled: true,
    persist: false,
  },
  transition: 'fade',
  css: 'unocss',
  // 可以使用不同的配色方案
  colorSchema: 'dark',
})
