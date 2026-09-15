/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Minimize2.ts
const Minimize2 = (props = {}) => {
	const { polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "4 14 10 14 10 20" }), polyline({ points: "20 10 14 10 14 4" }), line({
		x1: "14",
		y1: "10",
		x2: "21",
		y2: "3"
	}), line({
		x1: "3",
		y1: "21",
		x2: "10",
		y2: "14"
	}));
};
//#endregion
export { Minimize2 };

//# sourceMappingURL=Minimize2.js.map