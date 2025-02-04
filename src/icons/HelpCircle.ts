// VanJS Feather - HelpCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const HelpCircle = (props?: IconProps) => {
  const { path, circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    path({
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17",
    }),
  );
};
