/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Layout.ts
const Layout = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2",
		ry: "2"
	}), line({
		x1: "3",
		y1: "9",
		x2: "21",
		y2: "9"
	}), line({
		x1: "9",
		y1: "21",
		x2: "9",
		y2: "9"
	}));
};
//#endregion
export { Layout };

//# sourceMappingURL=Layout.js.map