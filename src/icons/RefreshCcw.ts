// VanJS Feather - RefreshCcw
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const RefreshCcw = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "1 4 1 10 7 10",
    }),
    polyline({
      points: "23 20 23 14 17 14",
    }),
    path({
      d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15",
    }),
  );
};
