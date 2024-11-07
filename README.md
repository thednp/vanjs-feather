# vanjs-feather

[![Coverage Status](https://coveralls.io/repos/github/thednp/vanjs-feather/badge.svg)](https://coveralls.io/github/thednp/vanjs-feather)
[![ci](https://github.com/thednp/vanjs-feather/actions/workflows/ci.yml/badge.svg)](https://github.com/thednp/vanjs-feather/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/vanjs-feather.svg)](https://www.npmjs.com/package/vanjs-feather)
[![typescript version](https://img.shields.io/badge/typescript-5.4.5-brightgreen)](https://www.typescriptlang.org/)
[![vitest version](https://img.shields.io/badge/vitest-1.6.0-brightgreen)](https://www.vitest.dev/)
[![vite version](https://img.shields.io/badge/vite-4.5.3-brightgreen)](https://vitejs.dev/)

[<img width="100%" src="vanjs-feather.png" alt="vanjs-feather">](https://thednp.github.io/vanjs-feather)


Feather icons for [VanJS](https://vanjs.org).

Powered by:

- [Vite](https://vitejs.dev) and [tsup](https://tsup.egoist.dev/) for tooling
- [Vitest](https://vitest.dev) for unit tests
- [TailwindCSS](https://tailwindcss.com) for demo styling
- [VanJSConverter](https://github.com/vanjs-org/converter) for generating the source code

## Installation

  **Install with npm**:
   ```bash
   npm install vanjs-feather
   ```

  **Install with pnpm**:
   ```bash
   pnpm install vanjs-feather
   ```

  **Install with yarn**:
   ```bash
   yarn add vanjs-feather
   ```

## Usage

   **Basic Usage**
   ```ts
   import van from "vanjs-core";
   import { Activity } from "vanjs-feather";
   const { main } = van.tags;

   const App = () => {
      return main({},
         Activity({ class="icon", style="color: turquoise" });
      );
   };

   van.add(document.body, App());
   ```

   **Properties**
   * `id`: *string | undefined* - sets an *id* **non-state** attribute for your icon, *default: ""*
   * `class`: *string | undefined* - sets a *class* **state** for your icon, *default: ""*
   * `style`: *string | undefined* - sets a *style* **state** for your icon, *default: ""*
   * `stroke`: *string | undefined* - sets a *stroke* **state** for your icon, *default: currentColor*
   * `strokeWidth`: *number | undefined* - sets a *stroke-width* **state** for your icon, *default: 2*
   * `width`: *number | undefined* - sets a *width* **state** for your icon, *default: 24*
   * `height`: *number | undefined* - sets a *height* **state** for your icon, *default: 24*

Since the feather library adds color to icons via the `stroke` property, any text `color` value inherited from parent elements would apply to your icons.

The `width` and `height` properties can change the scale of the icons, something you may not want when using custom `style` and / or `class`.

## License

**VanJS Feather** is released under the [MIT License](https://github.com/thednp/vanjs-feather/blob/master/LICENSE).
