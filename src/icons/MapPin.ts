// VanJS Feather - MapPin
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const MapPin = (props?: IconProps) => {
  const { path, circle } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
    }),
    circle({
      cx: "12",
      cy: "10",
      r: "3",
    }),
  );
};
