// VanJS Feather - SkipForward
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const SkipForward = (props?: IconProps) => {
  const { polygon, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "5 4 15 12 5 20 5 4",
    }),
    line({
      x1: "19",
      y1: "5",
      x2: "19",
      y2: "19",
    }),
  );
};
