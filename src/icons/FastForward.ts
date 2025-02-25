// VanJS Feather - FastForward
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const FastForward = (props?: Partial<SVGProps>) => {
  const { polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "13 19 22 12 13 5 13 19",
    }),
    polygon({
      points: "2 19 11 12 2 5 2 19",
    }),
  );
};
