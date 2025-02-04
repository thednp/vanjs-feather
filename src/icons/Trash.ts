// VanJS Feather - Trash
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Trash = (props?: IconProps) => {
  const { polyline, path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "3 6 5 6 21 6",
    }),
    path({
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    }),
  );
};
