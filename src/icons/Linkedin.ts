// VanJS Feather - Linkedin
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Linkedin = (props?: Partial<SVGProps>) => {
  const { path, circle, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    }),
    rect({
      x: "2",
      y: "9",
      width: "4",
      height: "12",
    }),
    circle({
      cx: "4",
      cy: "4",
      r: "2",
    }),
  );
};
