import { resolve } from 'node:path';
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vanjs from "vite-plugin-vanjs";

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
  plugins: [
    dts({
      outDir: 'dist',
      copyDtsFiles: true,
      rollupTypes: true,
    }),
    vanjs() as any,
  ],
  build: {
    minify: 'esbuild',
    emptyOutDir: true,
    outDir: 'dist',
    target: 'ESNext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: NAME,
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => fileName[format],
    },
    sourcemap: true,
  },
});
