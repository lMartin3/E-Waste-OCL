import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    server: {
        hmr: {
            port: 443,
        }
    },
    optimizeDeps: { include: ['@carbon/charts'], exclude:['svelte-routing'] }
})
