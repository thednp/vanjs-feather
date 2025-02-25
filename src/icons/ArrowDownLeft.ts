// VanJS Feather - ArrowDownLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowDownLeft = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "7",
      x2: "7",
      y2: "17",
    }),
    polyline({
      points: "17 17 7 17 7 7",
    }),
  );
};
