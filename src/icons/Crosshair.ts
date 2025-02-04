// VanJS Feather - Crosshair
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Crosshair = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "22",
      y1: "12",
      x2: "18",
      y2: "12",
    }),
    line({
      x1: "6",
      y1: "12",
      x2: "2",
      y2: "12",
    }),
    line({
      x1: "12",
      y1: "6",
      x2: "12",
      y2: "2",
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "18",
    }),
  );
};
