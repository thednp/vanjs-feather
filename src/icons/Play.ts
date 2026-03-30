// VanJS Feather - Play
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Play = (props: Partial<SVGProps> = {}) => {
  const { polygon } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    polygon({ points: "5 3 19 12 5 21 5 3" }),
  );
};
