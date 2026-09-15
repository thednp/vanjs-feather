/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/FolderPlus.ts
const FolderPlus = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }), line({
		x1: "12",
		y1: "11",
		x2: "12",
		y2: "17"
	}), line({
		x1: "9",
		y1: "14",
		x2: "15",
		y2: "14"
	}));
};
//#endregion
export { FolderPlus };

//# sourceMappingURL=FolderPlus.js.map