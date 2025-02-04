// VanJS Feather - Delete
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Delete = (props?: IconProps) => {
  const { path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
    }),
    line({
      x1: "18",
      y1: "9",
      x2: "12",
      y2: "15",
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "18",
      y2: "15",
    }),
  );
};
