// VanJS Feather - ChevronUp
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronUp = (props: Partial<SVGProps> = {}) => {
  const { polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    polyline({ points: "18 15 12 9 6 15" }),
  );
};
