// vite.config.ts
import path from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/static/img'),
    },
  },
})
