// VanJS Feather - Video
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Video = (props?: IconProps) => {
  const { polygon, rect } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    polygon({
      points: "23 7 16 12 23 17 23 7",
    }),
    rect({
      x: "1",
      y: "5",
      width: "15",
      height: "14",
      rx: "2",
      ry: "2",
    }),
  );
};
