// VanJS Feather - ArrowDownRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowDownRight = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "7",
      y1: "7",
      x2: "17",
      y2: "17",
    }),
    polyline({
      points: "17 7 17 17 7 17",
    }),
  );
};
