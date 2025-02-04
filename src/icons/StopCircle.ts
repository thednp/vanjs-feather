// VanJS Feather - StopCircle
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const StopCircle = (props?: IconProps) => {
  const { circle, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    rect({
      x: "9",
      y: "9",
      width: "6",
      height: "6",
    }),
  );
};
