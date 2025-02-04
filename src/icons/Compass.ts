// VanJS Feather - Compass
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Compass = (props?: IconProps) => {
  const { polygon, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polygon({
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
    }),
  );
};
