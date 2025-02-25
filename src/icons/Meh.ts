// VanJS Feather - Meh
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Meh = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "8",
      y1: "15",
      x2: "16",
      y2: "15",
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
