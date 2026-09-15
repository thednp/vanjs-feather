/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Calendar.ts
const Calendar = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "3",
		"y": "4",
		width: "18",
		height: "18",
		rx: "2",
		ry: "2"
	}), line({
		x1: "16",
		y1: "2",
		x2: "16",
		y2: "6"
	}), line({
		x1: "8",
		y1: "2",
		x2: "8",
		y2: "6"
	}), line({
		x1: "3",
		y1: "10",
		x2: "21",
		y2: "10"
	}));
};
//#endregion
export { Calendar };

//# sourceMappingURL=Calendar.js.map