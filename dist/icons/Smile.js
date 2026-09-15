/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Smile.ts
const Smile = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }), line({
		x1: "9",
		y1: "9",
		x2: "9.01",
		y2: "9"
	}), line({
		x1: "15",
		y1: "9",
		x2: "15.01",
		y2: "9"
	}));
};
//#endregion
export { Smile };

//# sourceMappingURL=Smile.js.map