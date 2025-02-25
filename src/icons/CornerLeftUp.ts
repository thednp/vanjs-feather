// VanJS Feather - CornerLeftUp
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CornerLeftUp = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "14 9 9 4 4 9",
    }),
    path({
      d: "M20 20h-7a4 4 0 0 1-4-4V4",
    }),
  );
};
