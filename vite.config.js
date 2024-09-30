// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',         // Main entry point (index.html)
        products: './products.html',  // Additional entry point (products.html)
      },
    },
  },
})
