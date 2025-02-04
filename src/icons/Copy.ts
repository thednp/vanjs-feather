// VanJS Feather - Copy
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Copy = (props?: IconProps) => {
  const { path, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2",
    }),
    path({
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
    }),
  );
};
