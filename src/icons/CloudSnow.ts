// VanJS Feather - CloudSnow
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CloudSnow = (props?: Partial<SVGProps>) => {
  const { path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25",
    }),
    line({
      x1: "8",
      y1: "16",
      x2: "8.01",
      y2: "16",
    }),
    line({
      x1: "8",
      y1: "20",
      x2: "8.01",
      y2: "20",
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18",
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12.01",
      y2: "22",
    }),
    line({
      x1: "16",
      y1: "16",
      x2: "16.01",
      y2: "16",
    }),
    line({
      x1: "16",
      y1: "20",
      x2: "16.01",
      y2: "20",
    }),
  );
};
