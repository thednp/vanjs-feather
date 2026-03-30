// VanJS Feather - Pause
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Pause = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    rect({
      "x": "6",
      "y": "4",
      width: "4",
      height: "16",
    }),
    rect({
      "x": "14",
      "y": "4",
      width: "4",
      height: "16",
    }),
  );
};
