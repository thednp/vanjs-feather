// VanJS Feather - LogIn
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const LogIn = (props?: Partial<SVGProps>) => {
  const { polyline, path, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    }),
    polyline({
      points: "10 17 15 12 10 7",
    }),
    line({
      x1: "15",
      y1: "12",
      x2: "3",
      y2: "12",
    }),
  );
};
