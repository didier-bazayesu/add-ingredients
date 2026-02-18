import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // When frontend calls `/ask`, Vite will forward it to your backend
      '/ask': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
