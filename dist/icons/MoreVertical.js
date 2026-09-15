/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/MoreVertical.ts
const MoreVertical = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "5",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "19",
		"r": "1"
	}));
};
//#endregion
export { MoreVertical };

//# sourceMappingURL=MoreVertical.js.map