// VanJS Feather - Type
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Type = (props?: IconProps) => {
  const { polyline, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "4 7 4 4 20 4 20 7",
    }),
    line({
      x1: "9",
      y1: "20",
      x2: "15",
      y2: "20",
    }),
    line({
      x1: "12",
      y1: "4",
      x2: "12",
      y2: "20",
    }),
  );
};
