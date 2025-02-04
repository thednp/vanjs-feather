// VanJS Feather - PlayCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const PlayCircle = (props?: IconProps) => {
  const { polygon, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polygon({
      points: "10 8 16 12 10 16 10 8",
    }),
  );
};
