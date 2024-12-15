import { type Element } from "mini-van-plate/van-plate";

export function renderToHTML(
  source: string | Element | Element[] | undefined,
): string {
  if (typeof source === "string") {
    return source;
  }
  if (typeof source === "object" && "render" in source) {
    return source.render();
  }
  if (Array.isArray(source)) {
    const elements = [];
    for (const el of source) {
      elements.push(renderToHTML(el));
    }
    return elements.join("\n    ");
  }

  // no source provided
  return "";
}
