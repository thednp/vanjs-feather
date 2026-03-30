// VanJS Feather - Volume1
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Volume1 = (props: Partial<SVGProps> = {}) => {
  const { polygon, path } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    polygon({ points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
    path({ "d": "M15.54 8.46a5 5 0 0 1 0 7.07" }),
  );
};
