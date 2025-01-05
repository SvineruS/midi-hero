import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/midi-hero/',
  build: {
    target: 'esnext',
  },
  define: {
    '__dirname': JSON.stringify(process.cwd()),
  }
})
