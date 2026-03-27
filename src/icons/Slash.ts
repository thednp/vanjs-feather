// VanJS Feather - Slash
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Slash = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "4.93",
      y1: "4.93",
      x2: "19.07",
      y2: "19.07",
    }),
  );
};
