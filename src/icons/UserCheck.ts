// VanJS Feather - UserCheck
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const UserCheck = (props?: Partial<SVGProps>) => {
  const { polyline, path, circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4",
    }),
    polyline({
      points: "17 11 19 13 23 9",
    }),
  );
};
