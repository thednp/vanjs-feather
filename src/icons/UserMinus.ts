// VanJS Feather - UserMinus
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const UserMinus = (props?: IconProps) => {
  const { path, circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4",
    }),
    line({
      x1: "23",
      y1: "11",
      x2: "17",
      y2: "11",
    }),
  );
};
