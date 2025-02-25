// VanJS Feather - Volume2
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Volume2 = (props?: Partial<SVGProps>) => {
  const { path, polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    }),
    path({
      d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",
    }),
  );
};
