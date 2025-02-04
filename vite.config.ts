import { resolve } from 'node:path';
import { defineConfig } from "vite";

const NAME = 'VanJSFeather';

const fileName = {
  es: `index.mjs`,
  cjs: `index.cjs`,
  iife: `index.js`,
};

export default defineConfig({
  base: './',
  esbuild: {
    legalComments: 'none',
  },

  build: {
    minify: 'esbuild',
    emptyOutDir: false,
    outDir: 'dist',
    target: 'ESNext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: NAME,
      formats: ['iife'],
      fileName: (format) => fileName[format],
    },

    sourcemap: true,
  },
});
