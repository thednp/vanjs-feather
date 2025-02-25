// VanJS Feather - CornerRightDown
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CornerRightDown = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "10 15 15 20 20 15",
    }),
    path({
      d: "M4 4h7a4 4 0 0 1 4 4v12",
    }),
  );
};
