// VanJS Feather - GitBranch
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const GitBranch = (props?: IconProps) => {
  const { path, circle, line } = van.tags("http://www.w3.org/2000/svg");
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
      r: "3",
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3",
    }),
    path({
      d: "M18 9a9 9 0 0 1-9 9",
    }),
  );
};
