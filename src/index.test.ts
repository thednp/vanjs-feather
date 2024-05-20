// @vitest-environment happy-dom
import { expect, test } from "vitest";
import * as VanJSFeather from ".";

const Icons = Object.entries(VanJSFeather);

Icons.forEach(([name, icon]) => {
  test(`Test ${name} icon`, () => {
    expect(icon()).toBeInstanceOf(SVGElement);
  });
});
