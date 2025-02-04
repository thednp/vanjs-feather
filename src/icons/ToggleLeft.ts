// VanJS Feather - ToggleLeft
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const ToggleLeft = (props?: IconProps) => {
  const { circle, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7",
    }),
    circle({
      cx: "8",
      cy: "12",
      r: "3",
    }),
  );
};
