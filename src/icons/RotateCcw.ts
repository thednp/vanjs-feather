// VanJS Feather - RotateCcw
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const RotateCcw = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "1 4 1 10 7 10",
    }),
    path({
      d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10",
    }),
  );
};
