// VanJS Feather - ArrowUpRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowUpRight = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "7",
      y1: "17",
      x2: "17",
      y2: "7",
    }),
    polyline({
      points: "7 7 17 7 17 17",
    }),
  );
};
