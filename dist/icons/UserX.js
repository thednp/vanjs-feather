/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/UserX.ts
const UserX = (props = {}) => {
	const { path, circle, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), circle({
		cx: "8.5",
		cy: "7",
		"r": "4"
	}), line({
		x1: "18",
		y1: "8",
		x2: "23",
		y2: "13"
	}), line({
		x1: "23",
		y1: "8",
		x2: "18",
		y2: "13"
	}));
};
//#endregion
export { UserX };

//# sourceMappingURL=UserX.js.map