// VanJS Feather - GitPullRequest
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const GitPullRequest = (props?: IconProps) => {
  const { path, circle, line } = van.tags("http://www.w3.org/2000/svg");
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
      d: "M13 6h3a2 2 0 0 1 2 2v7",
    }),
    line({
      x1: "6",
      y1: "9",
      x2: "6",
      y2: "21",
    }),
  );
};
