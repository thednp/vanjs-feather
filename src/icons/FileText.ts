// VanJS Feather - FileText
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const FileText = (props?: Partial<SVGProps>) => {
  const { polyline, path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    }),
    polyline({
      points: "14 2 14 8 20 8",
    }),
    line({
      x1: "16",
      y1: "13",
      x2: "8",
      y2: "13",
    }),
    line({
      x1: "16",
      y1: "17",
      x2: "8",
      y2: "17",
    }),
    polyline({
      points: "10 9 9 9 8 9",
    }),
  );
};
