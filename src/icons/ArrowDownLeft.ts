// VanJS Feather - ArrowDownLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowDownLeft = (props: Partial<SVGProps> = {}) => {
  const { line, polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "7",
      x2: "7",
      y2: "17",
    }),
    polyline({ points: "17 17 7 17 7 7" }),
  );
};
