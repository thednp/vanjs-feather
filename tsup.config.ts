import { defineConfig } from 'tsup'

export default defineConfig(
  // Node bundle configuration
  // Browser bundle is handled by Vite
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    // minify: true,
    splitting: true,
    outDir: 'dist',
    target: 'es2020',
    // treeshake: {
    //   moduleSideEffects: false,
    //   preset: "recommended"
    // },
    globalName: 'VanJSFeather',
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
      options.minifyIdentifiers = false
      options.sourcemap = true
      options.keepNames = true
      options.treeShaking = true
      options.preserveSymlinks = true
      // options.bundle = false
      options.external = ['vanjs-core']
    }
  }
)