import van from "vanjs-core";
import copyToClipboard from "../util/copyToClipboard";
import * as VanJSFeather from "../../../src/index";
import Tooltip from "./tooltip";

const Icons = Object.entries(VanJSFeather);

export default function Main() {
  const { main, div, button, span, h2, img, p, pre, a } = van.tags;

  return main(
    { class: "main" },
    div(
      { class: "container h-[75vh] px-5 mx-auto flex flex-row items-center" },
      div(
        { class: "flex gap-5 items-center" },
        img({
          src: "./vanjs.svg",
          class: "w-20 h-20",
          alt: "VanJS logo",
          width: "80",
          height: "80",
        }),
        div(
          {},
          h2(
            {
              class:
                "text-xl md:text-2xl font-weight-300 font-stretch-125 text-black dark:text-white",
            },
            "Feather Icons for VanJS",
          ),
          p(
            { class: "font-stretch-125 font-bold" },
            "Powered by Vite, Vitest & Typescript",
          ),
        ),
      ),
    ),
    div(
      { class: "bg-slate-300 dark:bg-slate-800" },
      div(
        {
          class:
            "container h-[100vh] lg:h-[75vh] px-5 mx-auto flex flex-row items-center",
        },
        div(
          { class: "w-full flex flex-row gap-[5rem] flex-wrap" },
          div(
            { id: "installation", class: "lg:w-[calc(50%-2.5rem)]" },
            h2(
              {
                class:
                  "mb-5 text-2xl font-weight-300 font-stretch-125 text-black dark:text-white",
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
            { id: "usage", class: "lg:w-[calc(50%-2.5rem)]" },
            h2(
              {
                class:
                  "mb-5 text-2xl font-weight-300 font-stretch-125 text-black dark:text-white",
              },
              "Usage",
            ),
            pre(
              { class: "font-mono mb-5 whitespace-pre-line" },
              span(
                { class: "text-sky-800 dark:text-sky-300" },
                "// import the icon(s)\n",
              ),
              'import { Activity } from "vanjs-feather";\n\n',
              span(
                { class: "text-sky-800 dark:text-sky-300" },
                "// call anywhere within VanJS codespace\n",
              ),
              'Activity({ class: "icon" })\n',
            ),
            div(
              { class: "flex flex-row gap-5" },
              a(
                {
                  class: "py-3 flex items-center mb-10 gap-3",
                  href: "https://github.com/thednp/vanjs-feather",
                  target: "_blank",
                  title: "Get more guides on Github page",
                },
                "More guides",
                VanJSFeather.ArrowRight({ class: "w-6 h-auto" }),
              ),
              a(
                {
                  class: "py-3 flex items-center mb-10 gap-3",
                  href: "#preview",
                  title: "Click to preview the icons",
                },
                "Preview Icons",
                VanJSFeather.ArrowRight({ class: "w-6 h-auto" }),
              ),
            ),
          ),
        ),
      ),
    ),
    div(
      { id: "preview", class: "container p-5 mx-auto my-20" },
      h2(
        {
          class:
            "mb-5 text-2xl font-weight-300 font-stretch-125 text-black dark:text-white",
        },
        "Preview",
      ),
      div(
        {
          class:
            "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-flow-row gap-4",
        },
        ...Icons.map(([name, icon]) =>
          Tooltip(
            {
              tip: name,
            },
            button(
              {
                "data-target": `feather-icon-${name}`,
                onclick: copyToClipboard,
                class:
                  "w-full flex flex-col items-center cursor-pointer p-3 lg:py-4 xl:py-5 rounded-[5px] bg-slate-50 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800",
              },
              icon({ class: "text-slate-500" }),
              span(
                {
                  id: `feather-icon-${name}`,
                  class:
                    "text-[12px] font-weight-600 font-stretch-90 text-black dark:text-white",
                },
                name,
              ),
            ),
          )
        ),
      ),
    ),
  );
}
