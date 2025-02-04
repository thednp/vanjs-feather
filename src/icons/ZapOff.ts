// VanJS Feather - ZapOff
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ZapOff = (props?: IconProps) => {
  const { polyline, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "12.41 6.75 13 2 10.57 4.92",
    }),
    polyline({
      points: "18.57 12.91 21 10 15.66 10",
    }),
    polyline({
      points: "8 8 3 14 12 14 11 22 16 16",
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
  );
};
