import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/otomatis/', // ⚠️ penting untuk GitHub Pages
})
