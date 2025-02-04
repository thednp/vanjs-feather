// VanJS Feather - Share
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Share = (props?: IconProps) => {
  const { polyline, path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    }),
    polyline({
      points: "16 6 12 2 8 6",
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "15",
    }),
  );
};
