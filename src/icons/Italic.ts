// VanJS Feather - Italic
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Italic = (props?: IconProps) => {
  const { line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "4",
      x2: "10",
      y2: "4",
    }),
    line({
      x1: "14",
      y1: "20",
      x2: "5",
      y2: "20",
    }),
    line({
      x1: "15",
      y1: "4",
      x2: "9",
      y2: "20",
    }),
  );
};
