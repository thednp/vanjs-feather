import van from "vanjs-core";
import VanJSLogo from "./vanjs.svg";
import { ArrowDown } from "../src";
const { header, div, ul, li, a, img, h1 } = van.tags;

export default function Header() {
  return header(
    { class: "sticky top-0" },
    div({
      class: "absolute inset-0 bg-slate-500/25 backdrop-blur-sm",
    }),
    ul(
      { class: "relative container px-5 mx-auto flex flex-row gap-3 text-xl" },
      li(
        { class: "p-3 flex flex-row items-center gap-3 " },
        img({ src: VanJSLogo, class: "w-10 h-10", alt: "VanJS logo" }),
        h1(
          {
            class: "font-weight-700 font-stretch-125 text-black dark:text-white",
          },
          "Feather",
        ),
      ),
      li(
        { class: "p-3 flex flex-row items-center gap-3 ml-auto" },
        a(
          {
            class:
              "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 font-weight-600 font-stretch-125 flex items-center gap-2",
            href: "https://github.com/thednp/vanjs-feather/archive/refs/heads/main.zip",
          },
          ArrowDown({ class: "h-6" }),
          "Download",
        ),
      ),
    ),
  );
}
