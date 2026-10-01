import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // /api/* is served by the Cloudflare Pages Functions in functions/.
    // Run them locally with `npx wrangler pages dev dist --port 8788`.
    proxy: { '/api': 'http://localhost:8788' },
  },
})
