// VanJS Feather - ArrowUpCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ArrowUpCircle = (props?: IconProps) => {
  const { polyline, circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polyline({
      points: "16 12 12 8 8 12",
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "8",
    }),
  );
};
