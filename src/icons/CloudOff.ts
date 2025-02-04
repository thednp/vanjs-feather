// VanJS Feather - CloudOff
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CloudOff = (props?: IconProps) => {
  const { path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3",
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
  );
};
