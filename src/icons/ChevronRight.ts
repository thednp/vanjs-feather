// VanJS Feather - ChevronRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronRight = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 18 15 12 9 6",
    }),
  );
};
