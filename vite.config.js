import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The shared kit ships JSX inside src/lib/motion.js, so esbuild has to be told
// to parse .js under src/ as JSX. Vite's default esbuild exclude is /\.js$/,
// hence the explicit empty exclude. Nothing else here is changed.
export default defineConfig({
  plugins: [react()],
  base: '/',
  esbuild: { include: /src[\\/].*\.[jt]sx?$/, exclude: [], loader: 'jsx' },
  build: { outDir: 'dist', assetsInlineLimit: 2048, chunkSizeWarningLimit: 900 },
  server: { port: 5173, open: false },
})
