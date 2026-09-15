/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Sun.ts
const Sun = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "5"
	}), line({
		x1: "12",
		y1: "1",
		x2: "12",
		y2: "3"
	}), line({
		x1: "12",
		y1: "21",
		x2: "12",
		y2: "23"
	}), line({
		x1: "4.22",
		y1: "4.22",
		x2: "5.64",
		y2: "5.64"
	}), line({
		x1: "18.36",
		y1: "18.36",
		x2: "19.78",
		y2: "19.78"
	}), line({
		x1: "1",
		y1: "12",
		x2: "3",
		y2: "12"
	}), line({
		x1: "21",
		y1: "12",
		x2: "23",
		y2: "12"
	}), line({
		x1: "4.22",
		y1: "19.78",
		x2: "5.64",
		y2: "18.36"
	}), line({
		x1: "18.36",
		y1: "5.64",
		x2: "19.78",
		y2: "4.22"
	}));
};
//#endregion
export { Sun };

//# sourceMappingURL=Sun.js.map