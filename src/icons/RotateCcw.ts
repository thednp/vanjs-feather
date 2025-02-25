// VanJS Feather - RotateCcw
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const RotateCcw = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "1 4 1 10 7 10",
    }),
    path({
      d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10",
    }),
  );
};
