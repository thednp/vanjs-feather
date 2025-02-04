// VanJS Feather - RefreshCw
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const RefreshCw = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "23 4 23 10 17 10",
    }),
    polyline({
      points: "1 20 1 14 7 14",
    }),
    path({
      d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15",
    }),
  );
};
