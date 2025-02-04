// VanJS Feather - Edit3
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Edit3 = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M12 20h9",
    }),
    path({
      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
    }),
  );
};
