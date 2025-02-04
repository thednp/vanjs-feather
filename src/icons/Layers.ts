// VanJS Feather - Layers
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Layers = (props?: IconProps) => {
  const { polyline, polygon } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 2 7 12 12 22 7 12 2",
    }),
    polyline({
      points: "2 17 12 22 22 17",
    }),
    polyline({
      points: "2 12 12 17 22 12",
    }),
  );
};
