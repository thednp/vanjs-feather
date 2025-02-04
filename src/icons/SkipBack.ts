// VanJS Feather - SkipBack
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const SkipBack = (props?: IconProps) => {
  const { polygon, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "19 20 9 12 19 4 19 20",
    }),
    line({
      x1: "5",
      y1: "19",
      x2: "5",
      y2: "5",
    }),
  );
};
