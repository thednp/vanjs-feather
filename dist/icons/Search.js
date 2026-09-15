/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Search.ts
const Search = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), line({
		x1: "21",
		y1: "21",
		x2: "16.65",
		y2: "16.65"
	}));
};
//#endregion
export { Search };

//# sourceMappingURL=Search.js.map