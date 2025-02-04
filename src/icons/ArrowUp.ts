// VanJS Feather - ArrowUp
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ArrowUp = (props?: IconProps) => {
  const { polyline, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "5",
    }),
    polyline({
      points: "5 12 12 5 19 12",
    }),
  );
};
