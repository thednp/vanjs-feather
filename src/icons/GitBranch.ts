// VanJS Feather - GitBranch
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const GitBranch = (props: Partial<SVGProps> = {}) => {
  const { line, circle, path } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    line({
      x1: "6",
      y1: "3",
      x2: "6",
      y2: "15",
    }),
    circle({
      cx: "18",
      cy: "6",
      "r": "3",
    }),
    circle({
      cx: "6",
      cy: "18",
      "r": "3",
    }),
    path({ "d": "M18 9a9 9 0 0 1-9 9" }),
  );
};
