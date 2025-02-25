// VanJS Feather - SkipBack
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const SkipBack = (props?: Partial<SVGProps>) => {
  const { polygon, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "19 20 9 12 19 4 19 20",
    }),
    line({
      x1: "5",
      y1: "19",
      x2: "5",
      y2: "5",
    }),
  );
};
