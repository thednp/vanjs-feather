import { env } from "mini-van-plate/shared";
import { type ChildDom, type Props } from "vanjs-core";

const Tooltip = (props: Props = {}, ...children: ChildDom[]) => {
  const { div } = env.van.tags;
  const { tip, ...rest } = props;
  const newProps = Object.assign(rest as Props, {
    class: "tooltip",
    "data-tip": tip || "Tooltip",
  });
  return (
    div(newProps, children)
  );
};

export default Tooltip;
