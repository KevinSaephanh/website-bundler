import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');
const scriptsDir = resolve(srcDir, 'scripts');
const outDir = resolve(rootDir, 'dist');

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react()],
  build: {
    outDir,
    minify: isProd,
    modulePreload: false,
    reportCompressedSize: isProd,
    emptyOutDir: !isDev,
    rollupOptions: {
      input: {
        content: resolve(scriptsDir, 'content', 'index.ts'),
        background: resolve(scriptsDir, 'background', 'index.ts'),
        popup: resolve(scriptsDir, 'popup', 'index.html'),
        options: resolve(scriptsDir, 'options', 'index.html'),
      },
      output: {
        entryFileNames: 'src/scripts/[name]/index.js',
        assetFileNames: 'assets/[ext]/[name].[ext]',
      },
    },
  },
});
