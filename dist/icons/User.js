/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/User.ts
const User = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), circle({
		cx: "12",
		cy: "7",
		"r": "4"
	}));
};
//#endregion
export { User };

//# sourceMappingURL=User.js.map