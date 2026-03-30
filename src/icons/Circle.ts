// VanJS Feather - Circle
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const Circle = (props: Partial<SVGProps> = {}) => {
  const { circle } = van.tags(svgNamespace);

  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      "r": "10",
    }),
  );
};
