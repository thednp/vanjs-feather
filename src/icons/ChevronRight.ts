// VanJS Feather - ChevronRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ChevronRight = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 18 15 12 9 6",
    }),
  );
};
