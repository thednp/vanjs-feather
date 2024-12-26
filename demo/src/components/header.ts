import van from "vanjs-core";
import { ArrowDown } from "../../../src";

export default function Header() {
  const { header, div, ul, li, a, h1 } = van.tags;
  return header(
    { class: "sticky top-0", style: "z-index: 1;" },
    div({
      class: "absolute inset-0 bg-slate-500/25 backdrop-blur-sm",
    }),
    ul(
      { class: "relative container px-5 mx-auto flex flex-row gap-3" },
      li(
        { class: "p-3 flex flex-row items-center gap-3 text-xl" },
        h1(
          {
            class:
              "font-weight-700 font-stretch-125 text-black dark:text-white",
          },
          "VanJS Feather",
        ),
      ),
      li(
        { class: "p-3 flex flex-row items-center gap-3 ml-auto text-md" },
        a(
          {
            class:
              "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 font-weight-600 font-stretch-125 flex items-center gap-2",
            href:
              "https://github.com/thednp/vanjs-feather/archive/refs/heads/main.zip",
          },
          ArrowDown({ class: "h-6" }),
          "Download",
        ),
      ),
    ),
  );
}
