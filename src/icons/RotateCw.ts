// VanJS Feather - RotateCw
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const RotateCw = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 4 23 10 17 10",
    }),
    path({
      d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10",
    }),
  );
};
