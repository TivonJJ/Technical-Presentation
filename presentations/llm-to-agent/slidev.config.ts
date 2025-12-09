import { defineConfig } from '@slidev/types'

export default defineConfig({
  theme: 'penguin',
  canvasWidth: 980,
  highlighter: 'shiki',
  lineNumbers: true,
  drawings: {
    enabled: true,
    persist: false,
  },
  transition: 'slide-left',
  css: 'unocss',
})
