// VanJS Feather - ChevronDown
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronDown = (props: Partial<SVGProps> = {}) => {
  const { polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    polyline({ points: "6 9 12 15 18 9" }),
  );
};
