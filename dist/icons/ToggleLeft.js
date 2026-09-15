/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ToggleLeft.ts
const ToggleLeft = (props = {}) => {
	const { rect, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "1",
		"y": "5",
		width: "22",
		height: "14",
		rx: "7",
		ry: "7"
	}), circle({
		cx: "8",
		cy: "12",
		"r": "3"
	}));
};
//#endregion
export { ToggleLeft };

//# sourceMappingURL=ToggleLeft.js.map