// VanJS Feather - Cpu
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Cpu = (props?: IconProps) => {
  const { line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2",
      ry: "2",
    }),
    rect({
      x: "9",
      y: "9",
      width: "6",
      height: "6",
    }),
    line({
      x1: "9",
      y1: "1",
      x2: "9",
      y2: "4",
    }),
    line({
      x1: "15",
      y1: "1",
      x2: "15",
      y2: "4",
    }),
    line({
      x1: "9",
      y1: "20",
      x2: "9",
      y2: "23",
    }),
    line({
      x1: "15",
      y1: "20",
      x2: "15",
      y2: "23",
    }),
    line({
      x1: "20",
      y1: "9",
      x2: "23",
      y2: "9",
    }),
    line({
      x1: "20",
      y1: "14",
      x2: "23",
      y2: "14",
    }),
    line({
      x1: "1",
      y1: "9",
      x2: "4",
      y2: "9",
    }),
    line({
      x1: "1",
      y1: "14",
      x2: "4",
      y2: "14",
    }),
  );
};
