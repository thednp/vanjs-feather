/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowDownLeft.ts
const ArrowDownLeft = (props = {}) => {
	const { line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "17",
		y1: "7",
		x2: "7",
		y2: "17"
	}), polyline({ points: "17 17 7 17 7 7" }));
};
//#endregion
export { ArrowDownLeft };

//# sourceMappingURL=ArrowDownLeft.js.map