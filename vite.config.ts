import { resolve } from 'node:path';
import { defineConfig } from "vite";

const NAME = 'VanJSFeather';

const fileName = {
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
    target: 'es2020',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: NAME,
      formats: ['iife'],
      fileName: (format) => fileName[format],
    },

    sourcemap: true,
  },
});
