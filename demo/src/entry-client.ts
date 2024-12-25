// entry-client.ts
import van from "@vanjs/van";
import App from "./app.ts";

const root = document.getElementById("app") as HTMLElement;

van.hydrate(root, (dom) => {
  const children = App();
  dom.replaceChildren(
    ...(Array.isArray(children) ? children : [children]) as Element[],
  );
  return dom;
});
