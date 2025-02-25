// VanJS Feather - HelpCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const HelpCircle = (props?: Partial<SVGProps>) => {
  const { path, circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    path({
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17",
    }),
  );
};
