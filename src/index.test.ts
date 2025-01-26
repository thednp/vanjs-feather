// @vitest-environment happy-dom
import { expect, test } from "vitest";
import van from "vanjs-core";
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

test(`Test icon with props`, () => {
  const { Activity } = VanJSFeather;
  const cls = van.state("test");
  const style = van.state("display: block");
  const width = van.state(100);
  const height = van.state(100);
  const stroke = van.state("red");
  const strokeWidth = van.state(5);

  const Icon = Activity({
    class: cls,
    style,
    width,
    height,
    stroke,
    strokeWidth,
  });

  expect(Icon).toBeInstanceOf(SVGElement);
  expect(Icon.getAttribute("class")).to.equal("test");
  expect(Icon.getAttribute("width")).to.equal("100");
  expect(Icon.getAttribute("height")).to.equal("100");
  expect(Icon.getAttribute("stroke")).to.equal("red");
  expect(Icon.getAttribute("stroke-width")).to.equal("5");
});
