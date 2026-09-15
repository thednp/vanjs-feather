/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/CornerRightUp.ts
const CornerRightUp = (props = {}) => {
	const { polyline, path } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "10 9 15 4 20 9" }), path({ "d": "M4 20h7a4 4 0 0 0 4-4V4" }));
};
//#endregion
export { CornerRightUp };

//# sourceMappingURL=CornerRightUp.js.map