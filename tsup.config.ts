import { defineConfig } from 'tsup';

export default defineConfig(options => ({
    minify: !options.watch,
    entry: ['./src/index.ts'],
    outDir: './dist',
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['esm']
}))
