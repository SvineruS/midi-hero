import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/midi-hero/',
    plugins: [
        nodePolyfills(),
    ],
    define: {
        '__dirname': JSON.stringify(process.cwd()),
    }
})
