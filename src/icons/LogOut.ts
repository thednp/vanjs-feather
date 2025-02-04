// VanJS Feather - LogOut
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const LogOut = (props?: IconProps) => {
  const { polyline, path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    }),
    polyline({
      points: "16 17 21 12 16 7",
    }),
    line({
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12",
    }),
  );
};
