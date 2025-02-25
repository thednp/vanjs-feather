// VanJS Feather - Upload
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Upload = (props?: Partial<SVGProps>) => {
  const { polyline, path, line } = van.tags(svgNamespace);
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
