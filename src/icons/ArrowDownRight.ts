// VanJS Feather - ArrowDownRight
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ArrowDownRight = (props?: IconProps) => {
  const { polyline, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "7",
      y1: "7",
      x2: "17",
      y2: "17",
    }),
    polyline({
      points: "17 7 17 17 7 17",
    }),
  );
};
