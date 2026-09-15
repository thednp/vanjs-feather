/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ShoppingBag.ts
const ShoppingBag = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }), line({
		x1: "3",
		y1: "6",
		x2: "21",
		y2: "6"
	}), path({ "d": "M16 10a4 4 0 0 1-8 0" }));
};
//#endregion
export { ShoppingBag };

//# sourceMappingURL=ShoppingBag.js.map