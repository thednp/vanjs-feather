/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/CornerUpLeft.ts
const CornerUpLeft = (props = {}) => {
	const { polyline, path } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "9 14 4 9 9 4" }), path({ "d": "M20 20v-7a4 4 0 0 0-4-4H4" }));
};
//#endregion
export { CornerUpLeft };

//# sourceMappingURL=CornerUpLeft.js.map