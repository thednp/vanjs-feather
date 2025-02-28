// VanJS Feather - Frown
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Frown = (props?: Partial<SVGProps>) => {
  const { path, circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    path({
      d: "M16 16s-1.5-2-4-2-4 2-4 2",
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9",
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9",
    }),
  );
};
