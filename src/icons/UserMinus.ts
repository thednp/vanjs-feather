// VanJS Feather - UserMinus
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const UserMinus = (props?: Partial<SVGProps>) => {
  const { path, circle, line } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4",
    }),
    line({
      x1: "23",
      y1: "11",
      x2: "17",
      y2: "11",
    }),
  );
};
