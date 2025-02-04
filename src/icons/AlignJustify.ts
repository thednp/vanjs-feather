// VanJS Feather - AlignJustify
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const AlignJustify = (props?: IconProps) => {
  const { line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "21",
      y1: "10",
      x2: "3",
      y2: "10",
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6",
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14",
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "3",
      y2: "18",
    }),
  );
};
