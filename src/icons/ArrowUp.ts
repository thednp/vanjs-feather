// VanJS Feather - ArrowUp
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowUp = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "5",
    }),
    polyline({
      points: "5 12 12 5 19 12",
    }),
  );
};
