// VanJS Feather - Users
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Users = (props?: Partial<SVGProps>) => {
  const { path, circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    circle({
      cx: "9",
      cy: "7",
      r: "4",
    }),
    path({
      d: "M23 21v-2a4 4 0 0 0-3-3.87",
    }),
    path({
      d: "M16 3.13a4 4 0 0 1 0 7.75",
    }),
  );
};
