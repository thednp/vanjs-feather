// VanJS Feather - Percent
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Percent = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "5",
      x2: "5",
      y2: "19",
    }),
    circle({
      cx: "6.5",
      cy: "6.5",
      r: "2.5",
    }),
    circle({
      cx: "17.5",
      cy: "17.5",
      r: "2.5",
    }),
  );
};
