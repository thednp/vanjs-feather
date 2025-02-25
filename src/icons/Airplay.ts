// VanJS Feather - Airplay
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Airplay = (props?: Partial<SVGProps>) => {
  const { path, polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
    }),
    polygon({
      points: "12 15 17 21 7 21 12 15",
    }),
  );
};
