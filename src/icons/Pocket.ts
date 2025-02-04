// VanJS Feather - Pocket
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Pocket = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
    }),
    polyline({
      points: "8 10 12 14 16 10",
    }),
  );
};
