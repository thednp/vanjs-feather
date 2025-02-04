// VanJS Feather - Trello
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Trello = (props?: IconProps) => {
  const { rect } = van.tags("http://www.w3.org/2000/svg");
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
