// VanJS Feather - ToggleRight
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const ToggleRight = (props: Partial<SVGProps> = {}) => {
  const { rect, circle } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    rect({
      "x": "1",
      "y": "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7",
    }),
    circle({
      cx: "16",
      cy: "12",
      "r": "3",
    }),
  );
};
