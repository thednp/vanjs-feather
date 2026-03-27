// VanJS Feather - Minus
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Minus = (props?: Partial<SVGProps>) => {
  const { line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
  );
};
