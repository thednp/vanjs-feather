/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/HelpCircle.ts
const HelpCircle = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), line({
		x1: "12",
		y1: "17",
		x2: "12.01",
		y2: "17"
	}));
};
//#endregion
export { HelpCircle };

//# sourceMappingURL=HelpCircle.js.map