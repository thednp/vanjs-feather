// VanJS Feather - Maximize2
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Maximize2 = (props?: IconProps) => {
  const { polyline, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "15 3 21 3 21 9",
    }),
    polyline({
      points: "9 21 3 21 3 15",
    }),
    line({
      x1: "21",
      y1: "3",
      x2: "14",
      y2: "10",
    }),
    line({
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14",
    }),
  );
};
