import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /[\\/]node_modules[\\/](react|react-dom|react-router)/,
              minSize: 0,
            },
            {
              name: 'vendor-motion',
              test: /[\\/]node_modules[\\/](framer-motion|motion)/,
              minSize: 0,
            },
          ],
        },
      },
    },
  },
})
