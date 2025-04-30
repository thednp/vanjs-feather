// entry-client.ts
import van from "vanjs-core";
import App from "./app.ts";

const root = document.getElementById("app") as HTMLElement;

van.hydrate(root, (dom) => {
  dom.replaceChildren(...App());
  return dom;
});
