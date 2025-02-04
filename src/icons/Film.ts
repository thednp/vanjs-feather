// VanJS Feather - Film
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Film = (props?: IconProps) => {
  const { line, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "2.18",
      ry: "2.18",
    }),
    line({
      x1: "7",
      y1: "2",
      x2: "7",
      y2: "22",
    }),
    line({
      x1: "17",
      y1: "2",
      x2: "17",
      y2: "22",
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12",
    }),
    line({
      x1: "2",
      y1: "7",
      x2: "7",
      y2: "7",
    }),
    line({
      x1: "2",
      y1: "17",
      x2: "7",
      y2: "17",
    }),
    line({
      x1: "17",
      y1: "17",
      x2: "22",
      y2: "17",
    }),
    line({
      x1: "17",
      y1: "7",
      x2: "22",
      y2: "7",
    }),
  );
};
