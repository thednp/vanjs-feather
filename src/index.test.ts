// @vitest-environment happy-dom
import { expect, test } from "vitest";
import * as VanJSFeather from ".";

const Icons = Object.entries(VanJSFeather);

Icons.forEach(([name, icon], idx) => {
  test(`Test ${name} icon`, () => {
    if (idx === 0) {
      expect(
        icon({ class: "test", id: "test-" + name, style: "display: block" }),
      ).toBeInstanceOf(SVGElement);
    } else {
      expect(icon()).toBeInstanceOf(SVGElement);
    }
  });
});
