// VanJS Feather - LogIn
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const LogIn = (props?: IconProps) => {
  const { polyline, path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    }),
    polyline({
      points: "10 17 15 12 10 7",
    }),
    line({
      x1: "15",
      y1: "12",
      x2: "3",
      y2: "12",
    }),
  );
};
