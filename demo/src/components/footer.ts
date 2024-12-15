import { env } from "mini-van-plate/shared";
import { Github } from "../../../src";

export default function Footer() {
  const { footer, a, img, span } = env.van.tags;
  return footer(
    { class: "container mx-auto px-5 flex flex-row gap-3" },
    a(
      {
        class: "py-3 flex items-center",
        href: "https://vitejs.dev",
        target: "_blank",
      },
      img({
        src: "./vite.svg",
        class: "logo w-6 h-auto",
        width: "24",
        height: "24",
        alt: "Vite logo",
      }),
    ),
    a(
      {
        class: "py-3 flex items-center",
        href: "https://vitest.dev",
        target: "_blank",
      },
      img({
        src: "./vitest.svg",
        class: "logo w-6 h-auto",
        width: "24",
        height: "24",
        alt: "Vitest logo",
      }),
    ),
    a(
      {
        class: "py-3 flex items-center",
        href: "https://vanjs.org",
        target: "_blank",
      },
      img({
        src: "./vanjs.svg",
        class: "logo vanilla w-6 h-auto",
        width: "24",
        height: "24",
        alt: "VanJS logo",
      }),
    ),
    a(
      {
        class: "py-3 flex items-center",
        href: "https://github.com/thednp/vanjs-feather",
        target: "_blank",
      },
      span({ class: "sr-only" }, "VanJS Feather on Github"),
      Github({ class: "w-6 h-auto" }),
    ),
    span(
      { class: "py-3 ml-auto text-sm" },
      span(
        {
          class: "font-weight-800 font-stretch-125 text-black dark:text-white",
        },
        "thednp",
      ),
      " © " + new Date().getFullYear(),
    ),
  );
}
