/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/CornerDownRight.ts
const CornerDownRight = (props = {}) => {
	const { polyline, path } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "15 10 20 15 15 20" }), path({ "d": "M4 4v7a4 4 0 0 0 4 4h12" }));
};
//#endregion
export { CornerDownRight };

//# sourceMappingURL=CornerDownRight.js.map