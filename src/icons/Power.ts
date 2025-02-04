// VanJS Feather - Power
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Power = (props?: IconProps) => {
  const { path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M18.36 6.64a9 9 0 1 1-12.73 0",
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "12",
    }),
  );
};
