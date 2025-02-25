// VanJS Feather - CornerRightUp
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CornerRightUp = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "10 9 15 4 20 9",
    }),
    path({
      d: "M4 20h7a4 4 0 0 0 4-4V4",
    }),
  );
};
