// VanJS Feather - Hash
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Hash = (props?: IconProps) => {
  const { line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "4",
      y1: "9",
      x2: "20",
      y2: "9",
    }),
    line({
      x1: "4",
      y1: "15",
      x2: "20",
      y2: "15",
    }),
    line({
      x1: "10",
      y1: "3",
      x2: "8",
      y2: "21",
    }),
    line({
      x1: "16",
      y1: "3",
      x2: "14",
      y2: "21",
    }),
  );
};
