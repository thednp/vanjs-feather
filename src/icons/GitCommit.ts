// VanJS Feather - GitCommit
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const GitCommit = (props?: Partial<SVGProps>) => {
  const { circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "4",
    }),
    line({
      x1: "1.05",
      y1: "12",
      x2: "7",
      y2: "12",
    }),
    line({
      x1: "17.01",
      y1: "12",
      x2: "22.96",
      y2: "12",
    }),
  );
};
