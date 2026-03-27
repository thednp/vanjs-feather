import { defineConfig } from "tsdown";
import stripComments from "vite-plugin-strip-comments";
const pkg = await import("./package.json", { with: { type: "json" } }).then(
  (m) => m.default,
);

const year = new Date().getFullYear();
const banner = `/*!
* vanjs-feather $package v${pkg.version} (${pkg.homepage})
* Copyright ${year} © ${pkg.author}
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/`;
const miniBanner =
  `/*! vanjs-feather $package v${pkg.version} | ${pkg.author} © ${year} | ${pkg.license}-License */`;

export default defineConfig([
  { // ES
    entry: {
      index: "src/index.ts",
    },
    target: "esnext",
    platform: "neutral",
    exports: true,
    format: ["esm"],
    dts: true,
    clean: true,
    sourcemap: true,
    globalName: "VanJSFeather",
    banner: banner.replace("$package", "ESM"),
    plugins: [stripComments({ type: "keep-jsdoc" })],
    deps: {
      skipNodeModulesBundle: true,
      neverBundle: ["vanjs-core"]
    }
    
  },
  // { // CJS
  //   entry: {
  //     index: "src/index.ts",
  //   },
  //   target: "esnext",
  //   platform: "neutral",
  //   exports: true,
  //   format: ["cjs"],
  //   dts: true,
  //   // clean: true,
  //   sourcemap: true,
  //   globalName: "VanJSFeather",
  //   banner: banner.replace("$package", "CJS"),
  //   plugins: [stripComments({ type: "keep-jsdoc" })],
  // },
  { // UMD
    entry: {
      index: "src/index.ts",
    },
    platform: "browser",
    target: "esnext",
    // minify: true,
    // exports: true,
    format: ["umd"],
    sourcemap: true,
    banner: miniBanner.replace("$package", "UMD"),
    globalName: "VanJSFeather",
    plugins: [stripComments({ type: "none" })],
    deps: {
      // skipNodeModulesBundle: true,
      // alwaysBundle: ["vanjs-core"]
    }
  },
]);
