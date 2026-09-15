/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Menu.ts
const Menu = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "3",
		y1: "12",
		x2: "21",
		y2: "12"
	}), line({
		x1: "3",
		y1: "6",
		x2: "21",
		y2: "6"
	}), line({
		x1: "3",
		y1: "18",
		x2: "21",
		y2: "18"
	}));
};
//#endregion
export { Menu };

//# sourceMappingURL=Menu.js.map