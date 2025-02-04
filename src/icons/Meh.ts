// VanJS Feather - Meh
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Meh = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "8",
      y1: "15",
      x2: "16",
      y2: "15",
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9",
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9",
    }),
  );
};
