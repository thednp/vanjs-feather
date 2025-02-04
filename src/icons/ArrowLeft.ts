// VanJS Feather - ArrowLeft
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ArrowLeft = (props?: IconProps) => {
  const { polyline, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12",
    }),
    polyline({
      points: "12 19 5 12 12 5",
    }),
  );
};
