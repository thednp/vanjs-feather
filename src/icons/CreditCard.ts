// VanJS Feather - CreditCard
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const CreditCard = (props?: Partial<SVGProps>) => {
  const { line, rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "4",
      width: "22",
      height: "16",
      rx: "2",
      ry: "2",
    }),
    line({
      x1: "1",
      y1: "10",
      x2: "23",
      y2: "10",
    }),
  );
};
