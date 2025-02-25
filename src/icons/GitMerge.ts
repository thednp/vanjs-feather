// VanJS Feather - GitMerge
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const GitMerge = (props?: Partial<SVGProps>) => {
  const { path, circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "18",
      cy: "18",
      r: "3",
    }),
    circle({
      cx: "6",
      cy: "6",
      r: "3",
    }),
    path({
      d: "M6 21V9a9 9 0 0 0 9 9",
    }),
  );
};
