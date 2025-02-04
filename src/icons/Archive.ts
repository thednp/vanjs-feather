// VanJS Feather - Archive
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Archive = (props?: IconProps) => {
  const { polyline, line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "21 8 21 21 3 21 3 8",
    }),
    rect({
      x: "1",
      y: "3",
      width: "22",
      height: "5",
    }),
    line({
      x1: "10",
      y1: "12",
      x2: "14",
      y2: "12",
    }),
  );
};
