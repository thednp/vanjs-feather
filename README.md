# vanjs-feather

[<img width="100%" src="vanjs-feather.png" alt="vanjs-feather">](https://thednp.github.io/vanjs-feather)


Feather icons for [VanJS](https://vanjs.org).

Powered by:

- [Vite](https://vitejs.dev) and [tsup](https://tsup.egoist.dev/) for tooling
- [TailwindCSS](https://tailwindcss.com) for demo styling
- [VanJSConverter](https://github.com/vanjs-org/converter)

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
         Activity({ class="icon", style="color: turquoise" })
      );
   };

   const app = document.querySelector<HTMLDivElement>("#app")!;
   van.add(app, App());
   ```

   **Properties**
   * `class`: *string | undefined* - sets a className **state** for your icon, *default: ""*
   * `style`: *string | undefined* - sets a style **state** for your icon, *default: ""*
   * `stroke`: *string | undefined* - sets a stroke **state** for your icon, *default: currentColor*
   * `width`: *number | undefined* - sets a width **state** for your icon, *default: 24*
   * `height`: *number | undefined* - sets a height **state** for your icon, *default: 24*

Since the feather library adds color to icons via the `stroke` property, any `color` value from parent elements would apply to your icons.

## License

**VanJS Feather** is released under the [MIT License](https://github.com/thednp/vanjs-feather/blob/master/LICENSE).
