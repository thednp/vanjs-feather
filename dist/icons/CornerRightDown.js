/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/CornerRightDown.ts
const CornerRightDown = (props = {}) => {
	const { polyline, path } = van.tags(svgNamespace);
	return FeatherIcon(props, polyline({ points: "10 15 15 20 20 15" }), path({ "d": "M4 4h7a4 4 0 0 1 4 4v12" }));
};
//#endregion
export { CornerRightDown };

//# sourceMappingURL=CornerRightDown.js.map