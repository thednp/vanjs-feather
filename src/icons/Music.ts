// VanJS Feather - Music
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Music = (props?: Partial<SVGProps>) => {
  const { path, circle } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 18V5l12-2v13",
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3",
    }),
    circle({
      cx: "18",
      cy: "16",
      r: "3",
    }),
  );
};
