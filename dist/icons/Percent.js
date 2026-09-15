/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Percent.ts
const Percent = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "19",
		y1: "5",
		x2: "5",
		y2: "19"
	}), circle({
		cx: "6.5",
		cy: "6.5",
		"r": "2.5"
	}), circle({
		cx: "17.5",
		cy: "17.5",
		"r": "2.5"
	}));
};
//#endregion
export { Percent };

//# sourceMappingURL=Percent.js.map