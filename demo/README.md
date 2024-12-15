## vite-starter-vanjs-ssr

A fully working vite starter template for [VanJS](https://vanjs.org) forked from
[template-ssr-vanilla-ts](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-vanilla-ts).

### Install

Clone the repository from Github.

```bash
git clone https://github.com/thednp/vite-starter-vanjs-ssr.git my-project
cd my-project
```

Run your favorite package manager installation script.

```bash
npm install
```

```bash
pnpm install
```

### Development

Start the development server.

```bash
npm run dev
```

```bash
pnpm dev
```

### Preview

Prerender the application and start the server.

```bash
npm run preview
```

```bash
pnpm preview
```

### Build a Static Application

Prerender the application.

```bash
npm run generate
```

Start the application.

```bash
npm run start
```

### Build a Server-Side Rendering Application

Build the application.

```bash
npm run build
```

Start the application.

```bash
npm run start
```

### Other Notes

- you are expected to create pages in the `src/pages` folder in order for the
  prerenderer to work;
- for more information about SSR, it's highly recommand to check the
  [Vite documentation](https://vite.dev/guide/ssr.html).

### License

Released under [MIT](LICENSE).
