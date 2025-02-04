// VanJS Feather - CloudLightning
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const CloudLightning = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9",
    }),
    polyline({
      points: "13 11 9 17 15 17 11 23",
    }),
  );
};
