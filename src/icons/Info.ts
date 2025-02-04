// VanJS Feather - Info
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Info = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12",
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8",
    }),
  );
};
