// VanJS Feather - MinusCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const MinusCircle = (props?: IconProps) => {
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
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
};
