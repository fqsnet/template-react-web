import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  rules: [
    // ['yellow', { color: '#e6a23c' }]
  ],
  shortcuts: {
    // 'wh-full': 'w-full h-full'
  },
  presets: [presetUno()]
})
