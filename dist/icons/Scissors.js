/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Scissors.ts
const Scissors = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}), line({
		x1: "20",
		y1: "4",
		x2: "8.12",
		y2: "15.88"
	}), line({
		x1: "14.47",
		y1: "14.48",
		x2: "20",
		y2: "20"
	}), line({
		x1: "8.12",
		y1: "8.12",
		x2: "12",
		y2: "12"
	}));
};
//#endregion
export { Scissors };

//# sourceMappingURL=Scissors.js.map