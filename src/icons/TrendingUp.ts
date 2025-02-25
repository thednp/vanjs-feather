// VanJS Feather - TrendingUp
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const TrendingUp = (props?: Partial<SVGProps>) => {
  const { polyline } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 6 13.5 15.5 8.5 10.5 1 18",
    }),
    polyline({
      points: "17 6 23 6 23 12",
    }),
  );
};
