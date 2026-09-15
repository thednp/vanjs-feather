/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Codepen.ts
const Codepen = (props = {}) => {
	const { polygon, line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, polygon({ points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }), line({
		x1: "12",
		y1: "22",
		x2: "12",
		y2: "15.5"
	}), polyline({ points: "22 8.5 12 15.5 2 8.5" }), polyline({ points: "2 15.5 12 8.5 22 15.5" }), line({
		x1: "12",
		y1: "2",
		x2: "12",
		y2: "8.5"
	}));
};
//#endregion
export { Codepen };

//# sourceMappingURL=Codepen.js.map