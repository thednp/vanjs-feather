// VanJS Feather - CheckSquare
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CheckSquare = (props?: Partial<SVGProps>) => {
  const { polyline, path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 11 12 14 22 4",
    }),
    path({
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    }),
  );
};
