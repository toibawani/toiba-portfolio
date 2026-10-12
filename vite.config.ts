import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the build works on GitHub Pages project URLs and locally.
export default defineConfig({
  base: './',
  plugins: [react()],
})
