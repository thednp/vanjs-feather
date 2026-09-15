/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/AlertOctagon.ts
const AlertOctagon = (props = {}) => {
	const { polygon, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polygon({ points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }), line({
		x1: "12",
		y1: "8",
		x2: "12",
		y2: "12"
	}), line({
		x1: "12",
		y1: "16",
		x2: "12.01",
		y2: "16"
	}));
};
//#endregion
export { AlertOctagon };

//# sourceMappingURL=AlertOctagon.js.map