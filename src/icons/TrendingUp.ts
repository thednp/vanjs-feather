// VanJS Feather - TrendingUp
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const TrendingUp = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "23 6 13.5 15.5 8.5 10.5 1 18",
    }),
    polyline({
      points: "17 6 23 6 23 12",
    }),
  );
};
