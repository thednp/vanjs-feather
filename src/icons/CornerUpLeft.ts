// VanJS Feather - CornerUpLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CornerUpLeft = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 14 4 9 9 4",
    }),
    path({
      d: "M20 20v-7a4 4 0 0 0-4-4H4",
    }),
  );
};
