// VanJS Feather - Crop
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Crop = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M6.13 1L6 16a2 2 0 0 0 2 2h15",
    }),
    path({
      d: "M1 6.13L16 6a2 2 0 0 1 2 2v15",
    }),
  );
};
