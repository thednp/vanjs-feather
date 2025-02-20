import { defineConfig } from 'tsup'

export default defineConfig(
  // Node bundle configuration
  // Browser bundle is handled by Vite
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    splitting: false,
    outDir: 'dist',
    target: 'es2020',
    globalName: 'VanJSFeather',
    pure: "strict",
    outExtension: ({ format }) => ({
      js: {
        esm: '.mjs',
        cjs: '.cjs'
      }[format]
    }),
    esbuildOptions(options) {
      options.legalComments = 'none'
      options.target = 'es2020'
      options.minify = false
      options.sourcemap = true
      options.minifyIdentifiers = false
      options.keepNames = true
      options.treeShaking = true
      options.preserveSymlinks = true
      options.external = ['vanjs-core']
    }
  }
)