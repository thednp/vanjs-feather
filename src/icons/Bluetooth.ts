// VanJS Feather - Bluetooth
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Bluetooth = (props?: IconProps) => {
  const { polyline } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5",
    }),
  );
};
