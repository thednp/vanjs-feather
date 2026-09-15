/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Server.ts
const Server = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "2",
		"y": "2",
		width: "20",
		height: "8",
		rx: "2",
		ry: "2"
	}), rect({
		"x": "2",
		"y": "14",
		width: "20",
		height: "8",
		rx: "2",
		ry: "2"
	}), line({
		x1: "6",
		y1: "6",
		x2: "6.01",
		y2: "6"
	}), line({
		x1: "6",
		y1: "18",
		x2: "6.01",
		y2: "18"
	}));
};
//#endregion
export { Server };

//# sourceMappingURL=Server.js.map