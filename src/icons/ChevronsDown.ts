// VanJS Feather - ChevronsDown
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ChevronsDown = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "7 13 12 18 17 13",
    }),
    polyline({
      points: "7 6 12 11 17 6",
    }),
  );
};
