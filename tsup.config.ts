import { defineConfig } from 'tsup'

export default defineConfig(
  // Node bundle configuration
  // Browser bundle is handled by Vite
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    // sourcemap: true,
    minify: true,
    splitting: true,
    outDir: 'dist',
    target: 'es2020',
    treeshake: true,
    globalName: 'VanJSFeather',
    outExtension: ({ format }) => ({
      js: {
        esm: '.mjs',
        cjs: '.cjs'
      }[format]
    }),
    esbuildOptions(options) {
      options.legalComments = 'none'
      options.sourcemap = true
    }
  }
)