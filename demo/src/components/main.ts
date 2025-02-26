import van from "vanjs-core";
import * as vanX from "vanjs-ext";
import copyToClipboard from "../util/copyToClipboard";
import * as VanJSFeather from "../../../src/index";
import Tooltip from "./tooltip";
import Tags from "./tags.json";

import { Activity } from "../../../src/index";

const Icons = Object.entries(VanJSFeather).map(([name, icon]) => {
  const lowerName = name.toLowerCase() as keyof typeof Tags;
  const tags = [lowerName, ...(Tags[lowerName] || [])];
  return {
    name,
    lowerName,
    icon,
    tags,
  };
});

type ChangeEvent<T extends EventTarget & Element = HTMLInputElement> =
  & InputEvent
  & { target: T };

export default function Main() {
  const { circle, path, svg } = van.tags("http://www.w3.org/2000/svg");
  const { main, div, button, span, h2, img, p, pre, a, label, input } =
    van.tags;
  const size = van.state(24);
  const sWidth = van.state(1);
  const count = van.state(64);
  const query = van.state("");

  const loader = div(
    {
      class:
        "w-full flex flex-col items-center mt-4 py-8 xl:py-12 rounded-[5px] bg-slate-50 dark:bg-slate-950",
    },
    svg(
      {
        class: "size-5 animate-spin text-current",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
      },
      circle({
        class: "opacity-25",
        cx: "12",
        cy: "12",
        "r": "10",
        stroke: "currentColor",
        "stroke-width": "4",
      }),
      path({
        class: "opacity-75",
        fill: "currentColor",
        "d":
          "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
      }),
    ),
  );
  const startObserver = () => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(([entry], currentObserver) => {
      if (entry.isIntersecting && count.oldVal < Icons.length) {
        const remaining = Icons.length - count.oldVal;
        count.val = count.oldVal + (remaining < 64 ? remaining : 64);
      }
      if (count.val >= Icons.length) {
        currentObserver.disconnect();
        loader.remove();
      }
    }, { rootMargin: "100px" });
    observer.observe(loader);
  };

  startObserver();

  const List = vanX.reactive({ icons: Icons });

  van.derive(() => {
    const currentQuery = query.val.split(" ");
    const currentCount = count.val;
    if (query.val.length && currentQuery.length) {
      const searchResults = Icons.filter(({ lowerName, tags }) =>
        currentQuery.some((q) => lowerName === q) || currentQuery.some((q) =>
          lowerName.includes(q)
        ) ||
        tags.some((t) => currentQuery.some((q) => q === t || t.includes(q)))
      );
      if (searchResults.length) {
        vanX.replace(List.icons, searchResults);
      } else {
        vanX.replace(List.icons, [{
          name: "No icon found...",
          icon: (Icons.find(({ name }) =>
            name === "Info"
          ) as typeof Icons[0]).icon,
          lowerName: "not-found" as "tag",
          tags: [],
        }]);
      }

      loader.remove();
      count.val = Icons.length;
    } else if (currentCount < Icons.length) {
      vanX.replace(List.icons, Icons.slice(0, currentCount));
    } else {
      vanX.replace(List.icons, Icons);
    }
  });

  return main(
    { class: "main" },
    div(
      {
        class:
          "container h-[50vh] md:h-[75vh] px-5 mx-auto flex flex-col flex-row items-center",
      },
      div(
        { class: "w-full flex flex-col md:flex-row items-center" },
        div(
          {
            class:
              "w-full lg:w-1/2 my-8 flex flex-col sm:flex-row gap-6 sm:items-center",
          },
          img({
            src: "./vanjs.svg",
            class: "w-20 h-20",
            alt: "VanJS logo",
            width: "80",
            height: "80",
          }),
          div(
            h2(
              {
                class:
                  "text-xl md:text-2xl font-light font-stretch-125% text-black dark:text-white",
              },
              "Feather Icons for VanJS",
            ),
            p(
              { class: "font-stretch-125% font-bold" },
              "Powered by Vite, Vitest & Typescript",
            ),
          ),
        ),
        div(
          {
            class: "hidden w-1/2 xl:w-1/3 xl:ml-auto lg:flex flex-row",
          },
          div(
            {
              class:
                "w-full my-8 p-4 bg-gray-500/10 rounded-lg flex flex-row items-center",
            },
            label(
              { for: "stroke", class: "m-2" },
              "Stroke",
              input({
                class: "ml-2 text-right border border-gray-500/30 rounded",
                placeholder: "Set stroke-width",
                name: "stroke",
                id: "stroke",
                value: sWidth,
                step: 0.1,
                min: 0.1,
                max: 5,
                type: "number",
                onchange: (e: ChangeEvent) =>
                  sWidth.val = Number(e.target.value),
              }),
            ),
            label(
              { for: "size", class: "m-2" },
              "Size",
              input({
                class: "ml-2 text-right border border-gray-500/30 rounded",
                placeholder: "Set width and height",
                name: "size",
                id: "size",
                value: size,
                min: 24,
                max: 128,
                type: "number",
                onchange: (e: ChangeEvent) => size.val = Number(e.target.value),
              }),
            ),
            Activity({
              class: "h-auto self-center max-w-full ml-auto",
              "stroke-width": sWidth,
              width: size,
              height: size,
            }),
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
                  "mb-5 text-2xl font-light font-stretch-125% text-black dark:text-white",
              },
              "Installation",
            ),
            pre(
              { class: "font-mono mb-10 whitespace-pre-line" },
              "> npm install vanjs-feather\n",
              "> pnpm add vanjs-feather\n",
              "> deno add npm:vanjs-feather\n",
              "> bun add vanjs-feather",
            ),
          ),
          div(
            { id: "usage", class: "w-full lg:w-[calc(50%-2.5rem)]" },
            h2(
              {
                class:
                  "mb-5 text-2xl font-light font-stretch-125% text-black dark:text-white",
              },
              "Usage",
            ),
            div(
              {
                class:
                  "mb-5 max-w-full overflow-x-auto whitespace-nowrap scrollbar",
              },
              pre(
                { class: "font-mono whitespace-pre-line w-max" },
                span(
                  { class: "text-sky-800 dark:text-sky-300" },
                  "// import the icon(s)\n",
                ),
                'import { Activity } from "vanjs-feather";\n\n',
                span(
                  { class: "text-sky-800 dark:text-sky-300" },
                  "// call anywhere within VanJS codespace\n",
                ),
                'Activity({ class: "icon" })\n\n',
                span(
                  { class: "text-sky-800 dark:text-sky-300" },
                  "// even with JSX transformation\n",
                ),
                '<Activity class="icon" />\n',
              ),
            ),
            div(
              { class: "flex flex-col md:flex-row gap-5 my-10" },
              a(
                {
                  class: "py-3 flex items-center gap-3",
                  href: "https://github.com/thednp/vanjs-feather",
                  target: "_blank",
                  title: "Get more guides on Github page",
                },
                "More guides",
                VanJSFeather.ArrowRight({ class: "w-6 h-auto" }),
              ),
              a(
                {
                  class: "py-3 flex items-center gap-3",
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
      div(
        { class: "flex flex-row mb-5 " },
        h2(
          {
            class:
              "text-2xl font-light font-stretch-125% text-black dark:text-white",
          },
          "Preview",
        ),
        input({
          class:
            "ml-auto min-w-20 w-48 px-3 py-2 border border-gray-500/30 rounded autofill:!bg-transparent",
          placeholder: "Find icon",
          name: "query",
          id: "query",
          value: query,
          type: "text",
          autocomplete: "off",
          spellcheck: "false",
          "aria-label": "Search icon",
          oninput: (e: ChangeEvent) => query.val = String(e.target.value),
        }),
      ),
      vanX.list(
        div({
          class:
            "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-flow-row gap-4",
        }),
        List.icons,
        (item) => {
          const { name, icon, lowerName } = item.val;

          return Tooltip(
            {
              tip: name,
            },
            button(
              {
                type: "button",
                "data-clip":
                  `${name}({ width: ${size.val}, height: ${size.val}, "stroke-width": ${sWidth.val} })`,
                "data-target": `feather-icon-${lowerName}`,
                onclick: lowerName !== "not-found" as "tag"
                  ? copyToClipboard
                  : null,
                class:
                  "w-full flex flex-col items-center cursor-pointer p-3 py-8 xl:py-12 rounded-[5px] bg-slate-50 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800",
              },
              icon({ class: "text-slate-500" }),
              span(
                {
                  id: `feather-icon-${lowerName}`,
                  class:
                    "text-[12px] font-semibold font-stretch-90% text-black dark:text-white",
                },
                name,
              ),
            ),
          );
        },
      ),
      loader,
    ),
  );
}
