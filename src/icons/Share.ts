// VanJS Feather - Share
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Share = (props?: Partial<SVGProps>) => {
  const { polyline, path, line } = van.tags(svgNamespace);
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
