// VanJS Feather - ArrowLeftCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ArrowLeftCircle = (props?: IconProps) => {
  const { polyline, circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polyline({
      points: "12 8 8 12 12 16",
    }),
    line({
      x1: "16",
      y1: "12",
      x2: "8",
      y2: "12",
    }),
  );
};
