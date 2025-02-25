// VanJS Feather - Search
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Search = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      r: "8",
    }),
    line({
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65",
    }),
  );
};
