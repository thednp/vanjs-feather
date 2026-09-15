/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Award.ts
const Award = (props = {}) => {
	const { circle, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, circle({
		cx: "12",
		cy: "8",
		"r": "7"
	}), polyline({ points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" }));
};
//#endregion
export { Award };

//# sourceMappingURL=Award.js.map