// VanJS Feather - TrendingDown
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const TrendingDown = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "23 18 13.5 8.5 8.5 13.5 1 6",
    }),
    polyline({
      points: "17 18 23 18 23 12",
    }),
  );
};
