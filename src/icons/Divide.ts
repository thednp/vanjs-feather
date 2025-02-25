// VanJS Feather - Divide
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Divide = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "6",
      r: "2",
    }),
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
    circle({
      cx: "12",
      cy: "18",
      r: "2",
    }),
  );
};
