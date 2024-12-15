// entry-server.ts
import van from "mini-van-plate/van-plate";
import { registerEnv } from "mini-van-plate/shared";
import { renderPreloadLinks } from "./server-util/renderPreloadLinks.ts";
import { renderToHTML } from "./server-util/renderToHTML.ts";

import App from "./app.ts";

registerEnv({ van });

export function render(_url: string, manifest: Record<string, string[]>) {
  const head = "";
  const html = renderToHTML(App());
  const preloadLinks = renderPreloadLinks(Object.keys(manifest), manifest);
  return { html, head, preloadLinks };
}
