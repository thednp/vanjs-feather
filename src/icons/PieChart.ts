// VanJS Feather - PieChart
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const PieChart = (props?: Partial<SVGProps>) => {
  const { path } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21.21 15.89A10 10 0 1 1 8 2.83",
    }),
    path({
      d: "M22 12A10 10 0 0 0 12 2v10z",
    }),
  );
};
