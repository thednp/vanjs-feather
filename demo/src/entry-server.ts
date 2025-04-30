// entry-server.ts
import { renderPreloadLinks, renderToString } from "@vanjs/server";
import App from "./app.ts";

export async function render(_url: string, manifest: Record<string, string[]>) {
  const html = await renderToString(App());
  const manifestFiles = Object.keys(manifest).filter((file) =>
    file !== undefined
  );
  const preloadLinks = renderPreloadLinks(manifestFiles, manifest);
  return { html, preloadLinks };
}
