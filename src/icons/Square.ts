// VanJS Feather - Square
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Square = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    rect({
      "x": "3",
      "y": "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
  );
};
