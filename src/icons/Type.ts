// VanJS Feather - Type
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Type = (props?: Partial<SVGProps>) => {
  const { polyline, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 7 4 4 20 4 20 7",
    }),
    line({
      x1: "9",
      y1: "20",
      x2: "15",
      y2: "20",
    }),
    line({
      x1: "12",
      y1: "4",
      x2: "12",
      y2: "20",
    }),
  );
};
