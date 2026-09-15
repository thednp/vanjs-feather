/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/BatteryCharging.ts
const BatteryCharging = (props = {}) => {
	const { path, line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }), line({
		x1: "23",
		y1: "13",
		x2: "23",
		y2: "11"
	}), polyline({ points: "11 6 7 12 13 12 9 18" }));
};
//#endregion
export { BatteryCharging };

//# sourceMappingURL=BatteryCharging.js.map