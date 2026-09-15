/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ShoppingCart.ts
const ShoppingCart = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "9",
		cy: "21",
		"r": "1"
	}), circle({
		cx: "20",
		cy: "21",
		"r": "1"
	}), path({ "d": "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" }));
};
//#endregion
export { ShoppingCart };

//# sourceMappingURL=ShoppingCart.js.map