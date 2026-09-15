/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/CornerUpRight.ts
const CornerUpRight = (props = {}) => {
	const { polyline, path } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "15 14 20 9 15 4" }), path({ "d": "M4 20v-7a4 4 0 0 1 4-4h12" }));
};
//#endregion
export { CornerUpRight };

//# sourceMappingURL=CornerUpRight.js.map