import van from "vanjs-core";
import type { ChildDom, PropsWithKnownKeys } from "vanjs-core";
import { cn } from "../util/cn";

type TooltipProps = PropsWithKnownKeys<HTMLDivElement> & {
  tip?: string;
  class?: string;
};

const Tooltip = (props: TooltipProps = {}, ...children: ChildDom[]) => {
  const { div } = van.tags;
  const { tip, class: className, ...rest } = props;
  const newProps = Object.assign(rest, {
    class: cn("tooltip", className),
    "data-tip": tip || "Tooltip",
  });
  return (
    div(newProps, children)
  );
};

export default Tooltip;
