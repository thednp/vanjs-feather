// VanJS Feather - Send
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Send = (props?: Partial<SVGProps>) => {
  const { polygon, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13",
    }),
    polygon({
      points: "22 2 15 22 11 13 2 9 22 2",
    }),
  );
};
