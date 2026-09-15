/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/UploadCloud.ts
const UploadCloud = (props = {}) => {
	const { polyline, line, path } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "16 16 12 12 8 16" }), line({
		x1: "12",
		y1: "12",
		x2: "12",
		y2: "21"
	}), path({ "d": "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }), polyline({ points: "16 16 12 12 8 16" }));
};
//#endregion
export { UploadCloud };

//# sourceMappingURL=UploadCloud.js.map