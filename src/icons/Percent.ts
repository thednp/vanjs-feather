// VanJS Feather - Percent
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Percent = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "5",
      x2: "5",
      y2: "19",
    }),
    circle({
      cx: "6.5",
      cy: "6.5",
      r: "2.5",
    }),
    circle({
      cx: "17.5",
      cy: "17.5",
      r: "2.5",
    }),
  );
};
