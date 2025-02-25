// VanJS Feather - ChevronsLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ChevronsLeft = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "11 17 6 12 11 7",
    }),
    polyline({
      points: "18 17 13 12 18 7",
    }),
  );
};
