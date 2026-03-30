// VanJS Feather - ChevronLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronLeft = (props: Partial<SVGProps> = {}) => {
  const { polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    polyline({ points: "15 18 9 12 15 6" }),
  );
};
