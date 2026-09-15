/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Send.ts
const Send = (props = {}) => {
	const { line, polygon } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "22",
		y1: "2",
		x2: "11",
		y2: "13"
	}), polygon({ points: "22 2 15 22 11 13 2 9 22 2" }));
};
//#endregion
export { Send };

//# sourceMappingURL=Send.js.map