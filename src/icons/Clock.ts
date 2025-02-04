// VanJS Feather - Clock
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Clock = (props?: IconProps) => {
  const { polyline, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polyline({
      points: "12 6 12 12 16 14",
    }),
  );
};
