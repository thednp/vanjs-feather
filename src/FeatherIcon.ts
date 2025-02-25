import type { ChildDom, PropValueOrDerived, TagFunc } from "vanjs-core";
import type { SVGProps } from "./types";
import van from "vanjs-core";

export const svgNamespace = "http://www.w3.org/2000/svg";

// VanJS Feather - FeatherIcon
export const FeatherIcon = (
  props: Partial<SVGProps> = {},
  ...children: ChildDom[]
) => {
  const { svg } = van.tags(svgNamespace);

  const defaultProps: Partial<SVGProps> = {
    xmlns: svgNamespace,
    viewBox: "0 0 24 24",
    fill: "none",
    width: 24,
    height: 24,
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  };

  return svg(
    {
      ...defaultProps,
      ...props,
    } as Record<string, PropValueOrDerived>,
    children,
  ) as ReturnType<TagFunc<SVGSVGElement>>;
};
