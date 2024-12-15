/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/*.{html,js,jsx,md,mdx,ts,tsx,css}",
    "./dist/**/*.{html,js,jsx,md,mdx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    fontVariationSettings: {
      stretch: [75, 90, 125],
      weight: [200, 300, 400, 500, 600, 700, 800, 900],
      italic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(function fontVariations({ addComponents, matchUtilities, theme }) {
      const fontVariationProps = Object.entries(theme("fontVariationSettings"))
        .map(([key, values]) => {
          /**
           * Generate the value for a CSS property based on the given key and value.
           *
           * @param {string} key - The key of the CSS property.
           * @param {string|number} value - The value of the CSS property.
           * @return {string} - The generated value for the CSS property.
           */
          const cssPropValue = (key, value) =>
            key === "stretch"
              ? `${value}%` // .font-stretch
              : key === "italic"
              ? `oblique ${value}deg` // .font-oblique
              : value; // font-weight
          return values.map(
            (value) => [`.font-${key}-${value}`, {
              [`font-${key.replace(/italic/g, "style")}`]: cssPropValue(
                key,
                value,
              ),
            }],
          );
        }).flat();

      // console.log(Object.fromEntries(fontVariationProps));
      addComponents(Object.fromEntries(fontVariationProps));

      matchUtilities(
        {
          "font-weight": (value) => ({
            "font-weight": value,
          }),
          "font-stretch": (value) => ({
            "font-stretch": `${value}%`,
          }),
          "font-italic": (value) => ({
            "font-style": `oblique ${value}deg`,
          }),
        },
        { values: Object.fromEntries(fontVariationProps) },
      );
    }),
  ],
};
