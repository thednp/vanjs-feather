// VanJS Feather - ArrowRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowRight = (props: Partial<SVGProps> = {}) => {
  const { line, polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
    polyline({ points: "12 5 19 12 12 19" }),
  );
};
