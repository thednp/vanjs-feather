/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/FileText.ts
const FileText = (props = {}) => {
	const { path, polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), polyline({ points: "14 2 14 8 20 8" }), line({
		x1: "16",
		y1: "13",
		x2: "8",
		y2: "13"
	}), line({
		x1: "16",
		y1: "17",
		x2: "8",
		y2: "17"
	}), polyline({ points: "10 9 9 9 8 9" }));
};
//#endregion
export { FileText };

//# sourceMappingURL=FileText.js.map