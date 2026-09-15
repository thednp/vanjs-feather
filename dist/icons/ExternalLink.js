/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/ExternalLink.ts
const ExternalLink = (props = {}) => {
	const { path, polyline, line } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }), polyline({ points: "15 3 21 3 21 9" }), line({
		x1: "10",
		y1: "14",
		x2: "21",
		y2: "3"
	}));
};
//#endregion
export { ExternalLink };

//# sourceMappingURL=ExternalLink.js.map