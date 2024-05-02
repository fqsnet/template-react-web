import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [codeInspectorPlugin({ bundler: 'vite' }), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
