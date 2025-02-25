// VanJS Feather - Trello
import van from "vanjs-core";
import { FeatherIcon, svgNamespace } from "../FeatherIcon";
import { type SVGProps } from "../types";

export const Trello = (props?: Partial<SVGProps>) => {
  const { rect } = van.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    rect({
      x: "7",
      y: "7",
      width: "3",
      height: "9",
    }),
    rect({
      x: "14",
      y: "7",
      width: "3",
      height: "5",
    }),
  );
};
