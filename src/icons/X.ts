// VanJS Feather - X
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const X = (props?: IconProps) => {
  const { line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    line({
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    }),
  );
};
