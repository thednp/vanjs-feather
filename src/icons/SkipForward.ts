// VanJS Feather - SkipForward
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const SkipForward = (props?: Partial<SVGProps>) => {
  const { polygon, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "5 4 15 12 5 20 5 4",
    }),
    line({
      x1: "19",
      y1: "5",
      x2: "19",
      y2: "19",
    }),
  );
};
