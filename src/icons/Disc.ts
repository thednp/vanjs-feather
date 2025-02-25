// VanJS Feather - Disc
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

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
