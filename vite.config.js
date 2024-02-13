import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/covid-tracker",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://disease.sh/v3/covid-19',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
