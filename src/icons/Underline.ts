// VanJS Feather - Underline
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Underline = (props?: Partial<SVGProps>) => {
  const { path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3",
    }),
    line({
      x1: "4",
      y1: "21",
      x2: "20",
      y2: "21",
    }),
  );
};
