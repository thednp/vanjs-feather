// VanJS Feather - GitCommit
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const GitCommit = (props?: IconProps) => {
  const { circle, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "4",
    }),
    line({
      x1: "1.05",
      y1: "12",
      x2: "7",
      y2: "12",
    }),
    line({
      x1: "17.01",
      y1: "12",
      x2: "22.96",
      y2: "12",
    }),
  );
};
