// VanJS Feather - Award
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Award = (props?: IconProps) => {
  const { polyline, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "8",
      r: "7",
    }),
    polyline({
      points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88",
    }),
  );
};
