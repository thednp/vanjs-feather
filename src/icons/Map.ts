// VanJS Feather - Map
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Map = (props?: Partial<SVGProps>) => {
  const { polygon, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6",
    }),
    line({
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "18",
    }),
    line({
      x1: "16",
      y1: "6",
      x2: "16",
      y2: "22",
    }),
  );
};
