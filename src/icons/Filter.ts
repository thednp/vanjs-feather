// VanJS Feather - Filter
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Filter = (props?: Partial<SVGProps>) => {
  const { polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    }),
  );
};
