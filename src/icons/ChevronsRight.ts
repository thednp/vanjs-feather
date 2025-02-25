// VanJS Feather - ChevronsRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ChevronsRight = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "13 17 18 12 13 7",
    }),
    polyline({
      points: "6 17 11 12 6 7",
    }),
  );
};
