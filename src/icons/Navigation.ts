// VanJS Feather - Navigation
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Navigation = (props: Partial<SVGProps> = {}) => {
  const { polygon } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    polygon({ points: "3 11 22 2 13 21 11 13 3 11" }),
  );
};
