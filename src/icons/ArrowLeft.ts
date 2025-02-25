// VanJS Feather - ArrowLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ArrowLeft = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12",
    }),
    polyline({
      points: "12 19 5 12 12 5",
    }),
  );
};
