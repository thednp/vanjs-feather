import { defineConfig } from "vite";
import path from "path";
import vanjs from "vite-plugin-vanjs";

// import generateIcons from "../generate";
// if (typeof generateIcons === "function") {
//   generateIcons();
// }

export default defineConfig({
  plugins: [vanjs()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "..", "src"),
      "@": path.resolve(__dirname, "assets"),
    },
  },
});
