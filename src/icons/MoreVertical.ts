// VanJS Feather - MoreVertical
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon.ts";
import { type SVGProps } from "../types.ts";

export const MoreVertical = (props?: Partial<SVGProps>) => {
  const { circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "1",
    }),
    circle({
      cx: "12",
      cy: "5",
      r: "1",
    }),
    circle({
      cx: "12",
      cy: "19",
      r: "1",
    }),
  );
};
