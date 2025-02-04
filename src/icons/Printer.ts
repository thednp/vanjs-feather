// VanJS Feather - Printer
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Printer = (props?: IconProps) => {
  const { polyline, path, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "6 9 6 2 18 2 18 9",
    }),
    path({
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
    }),
    rect({
      x: "6",
      y: "14",
      width: "12",
      height: "8",
    }),
  );
};
