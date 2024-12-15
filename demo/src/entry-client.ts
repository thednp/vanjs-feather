// entry-client.ts
import { registerEnv } from "mini-van-plate/shared";
import van from "vanjs-core";

import App from "./app.ts";

registerEnv({ van });

const root = document.getElementById("app") as HTMLElement;

if (!root.innerHTML.length) {
  van.add(root, App());
} else {
  van.hydrate(root, (dom) => {
    dom.innerHTML = "";
    dom.append(...App() as Node[]);
    return dom;
  });
}
