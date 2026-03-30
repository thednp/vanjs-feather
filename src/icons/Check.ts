// VanJS Feather - Check
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Check = (props: Partial<SVGProps> = {}) => {
  const { polyline } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    polyline({ points: "20 6 9 17 4 12" }),
  );
};
