/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/CornerDownLeft.ts
const CornerDownLeft = (props = {}) => {
	const { polyline, path } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "9 10 4 15 9 20" }), path({ "d": "M20 4v7a4 4 0 0 1-4 4H4" }));
};
//#endregion
export { CornerDownLeft };

//# sourceMappingURL=CornerDownLeft.js.map