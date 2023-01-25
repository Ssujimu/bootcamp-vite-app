import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/board/Normal",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        // searchValue가 /api 일때 /api 지우기라는 의미
        rewrite: (path) => path.replace("/api", "")
      }
    }
  }
})
