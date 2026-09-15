/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/GitCommit.ts
const GitCommit = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), line({
		x1: "1.05",
		y1: "12",
		x2: "7",
		y2: "12"
	}), line({
		x1: "17.01",
		y1: "12",
		x2: "22.96",
		y2: "12"
	}));
};
//#endregion
export { GitCommit };

//# sourceMappingURL=GitCommit.js.map