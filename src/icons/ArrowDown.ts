// VanJS Feather - ArrowDown
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowDown = (props: Partial<SVGProps> = {}) => {
  const { line, polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19",
    }),
    polyline({ points: "19 12 12 19 5 12" }),
  );
};
