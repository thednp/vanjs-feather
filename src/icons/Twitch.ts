// VanJS Feather - Twitch
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const Twitch = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",
    }),
  );
};
