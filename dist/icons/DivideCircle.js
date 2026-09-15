/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/DivideCircle.ts
const DivideCircle = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "8",
		y1: "12",
		x2: "16",
		y2: "12"
	}), line({
		x1: "12",
		y1: "16",
		x2: "12",
		y2: "16"
	}), line({
		x1: "12",
		y1: "8",
		x2: "12",
		y2: "8"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}));
};
//#endregion
export { DivideCircle };

//# sourceMappingURL=DivideCircle.js.map