// VanJS Feather - ChevronsUp
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ChevronsUp = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "17 11 12 6 7 11",
    }),
    polyline({
      points: "17 18 12 13 7 18",
    }),
  );
};
