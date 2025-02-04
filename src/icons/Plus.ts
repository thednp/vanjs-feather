// VanJS Feather - Plus
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Plus = (props?: IconProps) => {
  const { line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19",
    }),
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
  );
};
