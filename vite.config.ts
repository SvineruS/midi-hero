import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/midi-hero/',
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        marketplace: resolve(__dirname, 'marketplace.html'),
        game: resolve(__dirname, 'game.html'),
      },
    },
  },
})
