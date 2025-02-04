// VanJS Feather - ArrowUpRight
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ArrowUpRight = (props?: IconProps) => {
  const { polyline, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "7",
      y1: "17",
      x2: "17",
      y2: "7",
    }),
    polyline({
      points: "7 7 17 7 17 17",
    }),
  );
};
