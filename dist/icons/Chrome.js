/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Chrome.ts
const Chrome = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), line({
		x1: "21.17",
		y1: "8",
		x2: "12",
		y2: "8"
	}), line({
		x1: "3.95",
		y1: "6.06",
		x2: "8.54",
		y2: "14"
	}), line({
		x1: "10.88",
		y1: "21.94",
		x2: "15.46",
		y2: "14"
	}));
};
//#endregion
export { Chrome };

//# sourceMappingURL=Chrome.js.map