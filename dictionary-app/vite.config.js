import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'//import tailwindcss plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],//add tailwindcss plugin to the list of plugins
})
