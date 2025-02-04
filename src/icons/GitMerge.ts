// VanJS Feather - GitMerge
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const GitMerge = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
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
