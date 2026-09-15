/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import { n as svgNamespace, t as FeatherIcon } from "../FeatherIcon-CFkLPluN.js";
import van from "vanjs-core";
//#region src/icons/Cpu.ts
const Cpu = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return FeatherIcon(props, rect({
		"x": "4",
		"y": "4",
		width: "16",
		height: "16",
		rx: "2",
		ry: "2"
	}), rect({
		"x": "9",
		"y": "9",
		width: "6",
		height: "6"
	}), line({
		x1: "9",
		y1: "1",
		x2: "9",
		y2: "4"
	}), line({
		x1: "15",
		y1: "1",
		x2: "15",
		y2: "4"
	}), line({
		x1: "9",
		y1: "20",
		x2: "9",
		y2: "23"
	}), line({
		x1: "15",
		y1: "20",
		x2: "15",
		y2: "23"
	}), line({
		x1: "20",
		y1: "9",
		x2: "23",
		y2: "9"
	}), line({
		x1: "20",
		y1: "14",
		x2: "23",
		y2: "14"
	}), line({
		x1: "1",
		y1: "9",
		x2: "4",
		y2: "9"
	}), line({
		x1: "1",
		y1: "14",
		x2: "4",
		y2: "14"
	}));
};
//#endregion
export { Cpu };

//# sourceMappingURL=Cpu.js.map