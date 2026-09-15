/*!
* vanjs-feather ESM v0.2.0 (https://thednp.github.io/vanjs-feather)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-feather/blob/main/LICENSE)
*/
import van from "vanjs-core";
//#region src/FeatherIcon.ts
const svgNamespace = "http://www.w3.org/2000/svg";
const FeatherIcon = (initialProps = {}, ...children) => {
	const { svg } = van.tags(svgNamespace);
	const props = Object.fromEntries(Object.entries(initialProps).filter(([_, val]) => val));
	return svg({
		xmlns: svgNamespace,
		viewBox: "0 0 24 24",
		fill: "none",
		width: 24,
		height: 24,
		stroke: "currentColor",
		"stroke-width": 2,
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		...props
	}, children);
};
//#endregion
export { svgNamespace as n, FeatherIcon as t };

//# sourceMappingURL=FeatherIcon-CFkLPluN.js.map