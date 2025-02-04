// VanJS Feather - Pause
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Pause = (props?: IconProps) => {
  const { rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    rect({
      x: "6",
      y: "4",
      width: "4",
      height: "16",
    }),
    rect({
      x: "14",
      y: "4",
      width: "4",
      height: "16",
    }),
  );
};
