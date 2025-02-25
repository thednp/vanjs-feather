// VanJS Feather - StopCircle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const StopCircle = (props?: Partial<SVGProps>) => {
  const { circle, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10",
    }),
    rect({
      x: "9",
      y: "9",
      width: "6",
      height: "6",
    }),
  );
};
