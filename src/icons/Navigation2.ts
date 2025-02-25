// VanJS Feather - Navigation2
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Navigation2 = (props?: Partial<SVGProps>) => {
  const { polygon } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 19 21 12 17 5 21 12 2",
    }),
  );
};
