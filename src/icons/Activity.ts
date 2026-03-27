// VanJS Feather - Activity
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Activity = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "22 12 18 12 15 21 9 3 6 12 2 12",
    }),
  );
};
