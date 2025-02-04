// VanJS Feather - RotateCw
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const RotateCw = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "23 4 23 10 17 10",
    }),
    path({
      d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10",
    }),
  );
};
