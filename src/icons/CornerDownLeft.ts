// VanJS Feather - CornerDownLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CornerDownLeft = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 10 4 15 9 20",
    }),
    path({
      d: "M20 4v7a4 4 0 0 1-4 4H4",
    }),
  );
};
