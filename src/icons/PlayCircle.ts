// VanJS Feather - PlayCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const PlayCircle = (props?: Partial<SVGProps>) => {
  const { polygon, circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    polygon({
      points: "10 8 16 12 10 16 10 8",
    }),
  );
};
