import van from "vanjs-core";
import * as VanJSFeather from "~/index";

const Icons = Object.entries(VanJSFeather);
const { main, div, span } = van.tags;

export default function Main() {
  return main(
    { class: "container flex flex-row flex-wrap p-5 mx-auto" },
    ...Icons.map(([name, icon]) =>
      div(
        {
          class:
            "flex flex-col items-center flex-[0_0_auto] w-auto min-w-32 p-3 m-1 rounded-[5px] bg-slate-50 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800",
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
  );
}
