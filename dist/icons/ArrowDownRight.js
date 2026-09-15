/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ArrowDownRight.ts
const ArrowDownRight = (props = {}) => {
	const { line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "7",
		y1: "7",
		x2: "17",
		y2: "17"
	}), polyline({ points: "17 7 17 17 7 17" }));
};
//#endregion
export { ArrowDownRight };

//# sourceMappingURL=ArrowDownRight.js.map