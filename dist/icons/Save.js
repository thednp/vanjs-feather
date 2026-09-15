/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Save.ts
const Save = (props = {}) => {
	const { path, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }), polyline({ points: "17 21 17 13 7 13 7 21" }), polyline({ points: "7 3 7 8 15 8" }));
};
//#endregion
export { Save };

//# sourceMappingURL=Save.js.map