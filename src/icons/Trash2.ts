// VanJS Feather - Trash2
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Trash2 = (props?: IconProps) => {
  const { polyline, path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "3 6 5 6 21 6",
    }),
    path({
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    }),
    line({
      x1: "10",
      y1: "11",
      x2: "10",
      y2: "17",
    }),
    line({
      x1: "14",
      y1: "11",
      x2: "14",
      y2: "17",
    }),
  );
};
