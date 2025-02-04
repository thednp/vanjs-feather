// VanJS Feather - Thermometer
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Thermometer = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z",
    }),
  );
};
