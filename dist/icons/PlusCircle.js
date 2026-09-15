/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/PlusCircle.ts
const PlusCircle = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "12",
		y1: "8",
		x2: "12",
		y2: "16"
	}), line({
		x1: "8",
		y1: "12",
		x2: "16",
		y2: "12"
	}));
};
//#endregion
export { PlusCircle };

//# sourceMappingURL=PlusCircle.js.map