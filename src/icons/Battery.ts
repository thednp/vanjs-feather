// VanJS Feather - Battery
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Battery = (props?: Partial<SVGProps>) => {
  const { line, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "6",
      width: "18",
      height: "12",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "23",
      y1: "13",
      x2: "23",
      y2: "11",
    }),
  );
};
