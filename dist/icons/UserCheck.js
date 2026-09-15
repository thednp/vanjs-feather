/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/UserCheck.ts
const UserCheck = (props = {}) => {
	const { path, circle, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), circle({
		cx: "8.5",
		cy: "7",
		"r": "4"
	}), polyline({ points: "17 11 19 13 23 9" }));
};
//#endregion
export { UserCheck };

//# sourceMappingURL=UserCheck.js.map