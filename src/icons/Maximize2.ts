// VanJS Feather - Maximize2
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Maximize2 = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 3 21 3 21 9",
    }),
    polyline({
      points: "9 21 3 21 3 15",
    }),
    line({
      x1: "21",
      y1: "3",
      x2: "14",
      y2: "10",
    }),
    line({
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14",
    }),
  );
};
