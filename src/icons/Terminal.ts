// VanJS Feather - Terminal
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Terminal = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 17 10 11 4 5",
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "20",
      y2: "19",
    }),
  );
};
