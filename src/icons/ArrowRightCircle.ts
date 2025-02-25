// VanJS Feather - ArrowRightCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowRightCircle = (props?: Partial<SVGProps>) => {
  const { polyline, circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polyline({
      points: "12 16 16 12 12 8",
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
};
