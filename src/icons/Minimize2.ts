// VanJS Feather - Minimize2
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Minimize2 = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 14 10 14 10 20",
    }),
    polyline({
      points: "20 10 14 10 14 4",
    }),
    line({
      x1: "14",
      y1: "10",
      x2: "21",
      y2: "3",
    }),
    line({
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14",
    }),
  );
};
