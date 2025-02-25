// VanJS Feather - Power
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Power = (props?: Partial<SVGProps>) => {
  const { path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18.36 6.64a9 9 0 1 1-12.73 0",
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "12",
    }),
  );
};
