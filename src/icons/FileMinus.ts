// VanJS Feather - FileMinus
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const FileMinus = (props?: Partial<SVGProps>) => {
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
      x1: "9",
      y1: "15",
      x2: "15",
      y2: "15",
    }),
  );
};
