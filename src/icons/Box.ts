// VanJS Feather - Box
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Box = (props?: IconProps) => {
  const { polyline, path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    }),
    polyline({
      points: "3.27 6.96 12 12.01 20.73 6.96",
    }),
    line({
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12",
    }),
  );
};
