// VanJS Feather - Archive
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Archive = (props?: Partial<SVGProps>) => {
  const { polyline, line, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "21 8 21 21 3 21 3 8",
    }),
    rect({
      x: "1",
      y: "3",
      width: "22",
      height: "5",
    }),
    line({
      x1: "10",
      y1: "12",
      x2: "14",
      y2: "12",
    }),
  );
};
