// VanJS Feather - ArrowLeftCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowLeftCircle = (props?: Partial<SVGProps>) => {
  const { polyline, circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polyline({
      points: "12 8 8 12 12 16",
    }),
    line({
      x1: "16",
      y1: "12",
      x2: "8",
      y2: "12",
    }),
  );
};
