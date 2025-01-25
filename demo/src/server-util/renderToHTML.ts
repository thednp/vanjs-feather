import type { Element as VanElement, TagFunc } from "mini-van-plate/van-plate";

type Source = number | string | VanElement | VanElement[] | TagFunc | undefined;

export function renderToHTML(
  source: Source | (() => Source),
): string {
  if (typeof source === "number") {
    return String(source);
  }
  if (typeof source === "string") {
    return source.trim();
  }
  if (typeof source === "function") {
    return renderToHTML(source());
  }
  if (typeof source === "object" && "render" in source) {
    return source.render();
  }

  if (Array.isArray(source)) {
    const elements = [];
    for (const el of source) {
      elements.push(renderToHTML(el));
    }
    return elements.join("");
  }

  // no source provided
  // @ts-ignore - this is server side code
  console.warn("Render error: source not recognized: " + source);
  return "";
}
