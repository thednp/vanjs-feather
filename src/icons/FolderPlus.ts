// VanJS Feather - FolderPlus
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const FolderPlus = (props?: IconProps) => {
  const { path, line } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
    }),
    line({
      x1: "12",
      y1: "11",
      x2: "12",
      y2: "17",
    }),
    line({
      x1: "9",
      y1: "14",
      x2: "15",
      y2: "14",
    }),
  );
};
