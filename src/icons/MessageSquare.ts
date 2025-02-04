// VanJS Feather - MessageSquare
import van from "vanjs-core";
import { FeatherIcon, type IconProps } from "../FeatherIcon";

export const MessageSquare = (props?: IconProps) => {
  const { path } = van.tags("http://www.w3.org/2000/svg");
  return FeatherIcon(
    props,
    path({
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    }),
  );
};
