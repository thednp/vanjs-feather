// VanJS Feather - ArrowDownCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowDownCircle = (props?: Partial<SVGProps>) => {
  const { polyline, circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polyline({
      points: "8 12 12 16 16 12",
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16",
    }),
  );
};
