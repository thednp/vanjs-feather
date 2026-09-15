/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Plus.ts
const Plus = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "12",
		y1: "5",
		x2: "12",
		y2: "19"
	}), line({
		x1: "5",
		y1: "12",
		x2: "19",
		y2: "12"
	}));
};
//#endregion
export { Plus };

//# sourceMappingURL=Plus.js.map