/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/GitBranch.ts
const GitBranch = (props = {}) => {
	const { line, circle, path } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "6",
		y1: "3",
		x2: "6",
		y2: "15"
	}), circle({
		cx: "18",
		cy: "6",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}), path({ "d": "M18 9a9 9 0 0 1-9 9" }));
};
//#endregion
export { GitBranch };

//# sourceMappingURL=GitBranch.js.map