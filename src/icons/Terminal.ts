// VanJS Feather - Terminal
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Terminal = (props?: IconProps) => {
  const { polyline, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "4 17 10 11 4 5",
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "20",
      y2: "19",
    }),
  );
};
