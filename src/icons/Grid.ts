// VanJS Feather - Grid
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Grid = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    rect({
      "x": "3",
      "y": "3",
      width: "7",
      height: "7",
    }),
    rect({
      "x": "14",
      "y": "3",
      width: "7",
      height: "7",
    }),
    rect({
      "x": "14",
      "y": "14",
      width: "7",
      height: "7",
    }),
    rect({
      "x": "3",
      "y": "14",
      width: "7",
      height: "7",
    }),
  );
};
