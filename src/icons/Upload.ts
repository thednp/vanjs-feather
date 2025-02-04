// VanJS Feather - Upload
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Upload = (props?: IconProps) => {
  const { polyline, path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    }),
    polyline({
      points: "17 8 12 3 7 8",
    }),
    line({
      x1: "12",
      y1: "3",
      x2: "12",
      y2: "15",
    }),
  );
};
