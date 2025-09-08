import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), tailwindcss(), svgr()],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
