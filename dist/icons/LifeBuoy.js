/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/LifeBuoy.ts
const LifeBuoy = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), line({
		x1: "4.93",
		y1: "4.93",
		x2: "9.17",
		y2: "9.17"
	}), line({
		x1: "14.83",
		y1: "14.83",
		x2: "19.07",
		y2: "19.07"
	}), line({
		x1: "14.83",
		y1: "9.17",
		x2: "19.07",
		y2: "4.93"
	}), line({
		x1: "14.83",
		y1: "9.17",
		x2: "18.36",
		y2: "5.64"
	}), line({
		x1: "4.93",
		y1: "19.07",
		x2: "9.17",
		y2: "14.83"
	}));
};
//#endregion
export { LifeBuoy };

//# sourceMappingURL=LifeBuoy.js.map