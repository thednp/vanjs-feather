/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowRight.ts
const ArrowRight = (props = {}) => {
	const { line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "5",
		y1: "12",
		x2: "19",
		y2: "12"
	}), polyline({ points: "12 5 19 12 12 19" }));
};
//#endregion
export { ArrowRight };

//# sourceMappingURL=ArrowRight.js.map