// VanJS Feather - Disc
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Disc = (props?: Partial<SVGProps>) => {
  const { circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "3",
    }),
  );
};
