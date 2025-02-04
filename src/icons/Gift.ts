// VanJS Feather - Gift
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Gift = (props?: IconProps) => {
  const { polyline, path, line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "20 12 20 22 4 22 4 12",
    }),
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "5",
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "7",
    }),
    path({
      d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",
    }),
    path({
      d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
    }),
  );
};
