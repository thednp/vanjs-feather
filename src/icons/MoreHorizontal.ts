// VanJS Feather - MoreHorizontal
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const MoreHorizontal = (props?: Partial<SVGProps>) => {
  const { circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "1",
    }),
    circle({
      cx: "19",
      cy: "12",
      r: "1",
    }),
    circle({
      cx: "5",
      cy: "12",
      r: "1",
    }),
  );
};
