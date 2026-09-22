import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Matches the GitHub Pages project path: shellyambar.github.io/portfolio/
  base: '/portfolio/',
})
