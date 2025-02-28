// VanJS Feather - LogOut
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const LogOut = (props?: Partial<SVGProps>) => {
  const { polyline, path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    }),
    polyline({
      points: "16 17 21 12 16 7",
    }),
    line({
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12",
    }),
  );
};
