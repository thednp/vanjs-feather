/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Sunset.ts
const Sunset = (props = {}) => {
	const { path, line, polyline } = van.tags(svgNamespace);
	return FeatherIcon(props, path({ "d": "M17 18a5 5 0 0 0-10 0" }), line({
		x1: "12",
		y1: "9",
		x2: "12",
		y2: "2"
	}), line({
		x1: "4.22",
		y1: "10.22",
		x2: "5.64",
		y2: "11.64"
	}), line({
		x1: "1",
		y1: "18",
		x2: "3",
		y2: "18"
	}), line({
		x1: "21",
		y1: "18",
		x2: "23",
		y2: "18"
	}), line({
		x1: "18.36",
		y1: "11.64",
		x2: "19.78",
		y2: "10.22"
	}), line({
		x1: "23",
		y1: "22",
		x2: "1",
		y2: "22"
	}), polyline({ points: "16 5 12 9 8 5" }));
};
//#endregion
export { Sunset };

//# sourceMappingURL=Sunset.js.map