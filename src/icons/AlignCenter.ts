// VanJS Feather - AlignCenter
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const AlignCenter = (props?: Partial<SVGProps>) => {
  const { line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "10",
      x2: "6",
      y2: "10",
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6",
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14",
    }),
    line({
      x1: "18",
      y1: "18",
      x2: "6",
      y2: "18",
    }),
  );
};
