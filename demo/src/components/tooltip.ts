import van from "@vanjs/van";
import { type ChildDom, type Props } from "vanjs-core";

const Tooltip = (props: Props = {}, ...children: ChildDom[]) => {
  const { div } = van.tags;
  const { tip, ...rest } = props;
  const newProps = Object.assign(rest, {
    class: "tooltip",
    "data-tip": tip || "Tooltip",
  });
  return (
    div(newProps, children)
  );
};

export default Tooltip;
