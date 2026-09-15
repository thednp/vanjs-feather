/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Hash.ts
const Hash = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return FeatherIcon(props, line({
		x1: "4",
		y1: "9",
		x2: "20",
		y2: "9"
	}), line({
		x1: "4",
		y1: "15",
		x2: "20",
		y2: "15"
	}), line({
		x1: "10",
		y1: "3",
		x2: "8",
		y2: "21"
	}), line({
		x1: "16",
		y1: "3",
		x2: "14",
		y2: "21"
	}));
};
//#endregion
export { Hash };

//# sourceMappingURL=Hash.js.map