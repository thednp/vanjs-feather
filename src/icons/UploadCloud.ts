// VanJS Feather - UploadCloud
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const UploadCloud = (props?: IconProps) => {
  const { polyline, path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polyline({
      points: "16 16 12 12 8 16",
    }),
    line({
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21",
    }),
    path({
      d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3",
    }),
    polyline({
      points: "16 16 12 12 8 16",
    }),
  );
};
