// VanJS Feather - CornerUpRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CornerUpRight = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 14 20 9 15 4",
    }),
    path({
      d: "M4 20v-7a4 4 0 0 1 4-4h12",
    }),
  );
};
