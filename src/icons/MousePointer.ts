// VanJS Feather - MousePointer
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const MousePointer = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
    }),
    path({
      d: "M13 13l6 6",
    }),
  );
};
