// VanJS Feather - VolumeX
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const VolumeX = (props?: IconProps) => {
  const { polygon, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    }),
    line({
      x1: "23",
      y1: "9",
      x2: "17",
      y2: "15",
    }),
    line({
      x1: "17",
      y1: "9",
      x2: "23",
      y2: "15",
    }),
  );
};
