// VanJS Feather - BarChart
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const BarChart = (props?: Partial<SVGProps>) => {
  const { line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "10",
    }),
    line({
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "4",
    }),
    line({
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "16",
    }),
  );
};
