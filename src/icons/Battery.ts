// VanJS Feather - Battery
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Battery = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    rect({
      "x": "1",
      "y": "6",
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
