// VanJS Feather - Volume
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Volume = (props?: Partial<SVGProps>) => {
  const { polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    }),
  );
};
