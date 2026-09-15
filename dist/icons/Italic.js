/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Italic.ts
const Italic = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "19",
		y1: "4",
		x2: "10",
		y2: "4"
	}), line({
		x1: "14",
		y1: "20",
		x2: "5",
		y2: "20"
	}), line({
		x1: "15",
		y1: "4",
		x2: "9",
		y2: "20"
	}));
};
//#endregion
export { Italic };

//# sourceMappingURL=Italic.js.map