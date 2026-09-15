/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowDown.ts
const ArrowDown = (props = {}) => {
	const { line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "12",
		y1: "5",
		x2: "12",
		y2: "19"
	}), polyline({ points: "19 12 12 19 5 12" }));
};
//#endregion
export { ArrowDown };

//# sourceMappingURL=ArrowDown.js.map