import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'portfolio-2dsm'; // Substitua pelo nome do seu repositório

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // Adicione a base URL aqui
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})