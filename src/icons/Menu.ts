// VanJS Feather - Menu
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Menu = (props?: IconProps) => {
  const { line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12",
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6",
    }),
    line({
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18",
    }),
  );
};
