// VanJS Feather - AlertTriangle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const AlertTriangle = (props?: Partial<SVGProps>) => {
  const { path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13",
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17",
    }),
  );
};
