// VanJS Feather - DownloadCloud
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const DownloadCloud = (props?: Partial<SVGProps>) => {
  const { polyline, path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "8 17 12 21 16 17",
    }),
    line({
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21",
    }),
    path({
      d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29",
    }),
  );
};
