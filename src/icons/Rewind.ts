// VanJS Feather - Rewind
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Rewind = (props?: Partial<SVGProps>) => {
  const { polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 19 2 12 11 5 11 19",
    }),
    polygon({
      points: "22 19 13 12 22 5 22 19",
    }),
  );
};
