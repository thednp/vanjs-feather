// VanJS Feather - Lock
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Lock = (props?: IconProps) => {
  const { path, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2",
    }),
    path({
      d: "M7 11V7a5 5 0 0 1 10 0v4",
    }),
  );
};
