// VanJS Feather - Grid
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Grid = (props?: IconProps) => {
  const { rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "7",
      height: "7",
    }),
    rect({
      x: "14",
      y: "3",
      width: "7",
      height: "7",
    }),
    rect({
      x: "14",
      y: "14",
      width: "7",
      height: "7",
    }),
    rect({
      x: "3",
      y: "14",
      width: "7",
      height: "7",
    }),
  );
};
