// VanJS Feather - CornerDownRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CornerDownRight = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 10 20 15 15 20",
    }),
    path({
      d: "M4 4v7a4 4 0 0 0 4 4h12",
    }),
  );
};
