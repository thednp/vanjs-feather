// entry-server.ts
import type { TagFunc } from "mini-van-plate/van-plate";
import { renderPreloadLinks } from "./server-util/renderPreloadLinks.ts";
import { renderToHTML } from "./server-util/renderToHTML.ts";
import App from "./app.ts";

export async function render(_url: string, manifest: Record<string, string[]>) {
  const head = "";
  const html = renderToHTML(App() as unknown as TagFunc);
  const preloadLinks = renderPreloadLinks(Object.keys(manifest), manifest);
  return { html, head, preloadLinks };
}
