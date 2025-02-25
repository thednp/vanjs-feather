// VanJS Feather - X
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const X = (props?: Partial<SVGProps>) => {
  const { line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    line({
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    }),
  );
};
