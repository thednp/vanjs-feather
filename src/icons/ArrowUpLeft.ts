// VanJS Feather - ArrowUpLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowUpLeft = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "17",
      x2: "7",
      y2: "7",
    }),
    polyline({
      points: "7 17 7 7 17 7",
    }),
  );
};
