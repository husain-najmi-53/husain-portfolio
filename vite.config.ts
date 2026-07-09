import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/husain-portfolio/', // change to '/your-actual-repo-name/'
  plugins: [react(), tailwindcss()],
})
