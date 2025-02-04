// VanJS Feather - ArrowDownCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ArrowDownCircle = (props?: IconProps) => {
  const { polyline, circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polyline({
      points: "8 12 12 16 16 12",
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16",
    }),
  );
};
