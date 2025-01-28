// entry-server.ts
import { renderPreloadLinks, renderToString } from "@vanjs/server";
import App from "./app.ts";

export async function render(_url: string, manifest: Record<string, string[]>) {
  const head = "";
  const html = await renderToString(App());
  const preloadLinks = renderPreloadLinks(
    Object.keys(manifest),
    manifest,
  );
  return { html, head, preloadLinks };
}
