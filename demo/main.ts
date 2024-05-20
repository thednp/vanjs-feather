import van from "vanjs-core";
import * as VanJSFeather from "~/index";
import VanJSLogo from "./vanjs.svg";

const Icons = Object.entries(VanJSFeather);
const { main, div, span, h2, img, p, pre, a } = van.tags;

export default function Main() {
  return main(
    { class: "snap-mandatory snap-y" },
    div(
      { class: "span-center container h-[50vh] px-5 mx-auto flex flex-row items-center" },
      div(
        { class: "flex gap-5 items-center" },
        img({ src: VanJSLogo, class: "w-20 h-20", alt: "VanJS logo" }),
        div(
          {},
          h2(
            {
              class: "text-2xl font-weight-300 font-stretch-125 text-black dark:text-white",
            },
            "Feather Icons for VanJS",
          ),
          p({ class: "font-stretch-125 font-bold" }, "Powered by Vite, Vitest & Typescript"),
        ),
      ),
    ),
    div(
      { class: "span-center container h-[100vh] lg:h-[50vh] px-5 mx-auto flex flex-row gap-[5rem] flex-wrap" },
      div(
        { class: "lg:w-[calc(50%-2.5rem)]" },
        h2(
          {
            class: "mb-5 text-2xl font-weight-300 font-stretch-125 text-black dark:text-white",
          },
          "Installation",
        ),
        pre(
          { class: "font-mono mb-10 whitespace-pre-line" },
          "> npm install vanjs-feather\n",
          "> pnpm install vanjs-feather\n",
          "> yarn add vanjs-feather",
        ),
      ),
      div(
        { class: "lg:w-[calc(50%-2.5rem)]" },
        h2(
          {
            class: "mb-5 text-2xl font-weight-300 font-stretch-125 text-black dark:text-white",
          },
          "Usage",
        ),
        pre(
          { class: "font-mono mb-5 whitespace-pre-line" },
          span({ class: "text-sky-500/75" }, "// import the icon(s)\n"),
          'import { Activity } from "vanjs-feather";\n\n',
          span({ class: "text-sky-500/75" }, "// call anywhere within VanJS codespace\n"),
          'Activity({ class: "icon" })\n',
        ),
        a(
          {
            class: "py-3 flex items-center mb-10 gap-3",
            href: "https://github.com/thednp/vanjs-feather",
            target: "_blank",
          },
          "More",
          VanJSFeather.ArrowRight({ class: "w-6 h-auto" }),
        ),
      ),
    ),
    div(
      { class: "span-start container p-5 mx-auto" },
      h2(
        {
          class: "mb-5 text-2xl font-weight-300 font-stretch-125 text-black dark:text-white",
        },
        "Preview",
      ),
      div(
        { class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-flow-row gap-4" },
        ...Icons.map(([name, icon]) =>
          div(
            {
              class:
                "flex flex-col items-center p-3 lg:py-4 xl:py-5 rounded-[5px] bg-slate-50 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800",
            },
            icon({ class: "text-slate-500" }),
            span(
              {
                class: "text-[12px] font-weight-600 font-stretch-90 text-black dark:text-white",
              },
              name,
            ),
          ),
        ),
      ),
    ),
  );
}
