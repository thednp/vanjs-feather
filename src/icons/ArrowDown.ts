// VanJS Feather - ArrowDown
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowDown = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19",
    }),
    polyline({
      points: "19 12 12 19 5 12",
    }),
  );
};
