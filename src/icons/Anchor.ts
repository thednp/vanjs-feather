// VanJS Feather - Anchor
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Anchor = (props?: IconProps) => {
  const { path, circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "5",
      r: "3",
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "8",
    }),
    path({
      d: "M5 12H2a10 10 0 0 0 20 0h-3",
    }),
  );
};
