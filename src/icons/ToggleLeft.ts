// VanJS Feather - ToggleLeft
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const ToggleLeft = (props?: Partial<SVGProps>) => {
  const { circle, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7",
    }),
    circle({
      cx: "8",
      cy: "12",
      r: "3",
    }),
  );
};
