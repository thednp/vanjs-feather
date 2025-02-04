// VanJS Feather - Slash
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Slash = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "4.93",
      y1: "4.93",
      x2: "19.07",
      y2: "19.07",
    }),
  );
};
