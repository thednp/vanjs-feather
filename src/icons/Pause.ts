// VanJS Feather - Pause
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Pause = (props?: Partial<SVGProps>) => {
  const { rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "6",
      y: "4",
      width: "4",
      height: "16",
    }),
    rect({
      x: "14",
      y: "4",
      width: "4",
      height: "16",
    }),
  );
};
