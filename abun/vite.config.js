import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // ✅ Needed to resolve paths

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Define '@' as 'src/'
    },
  },
})
