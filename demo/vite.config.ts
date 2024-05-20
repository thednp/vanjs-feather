import { defineConfig } from "vite";
import path from "path";

// import generateIcons from "../generate";
// if (typeof generateIcons === "function") {
//   generateIcons();
// }

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "..", "src"),
      "@": path.resolve(__dirname, "assets"),
    },
  },
});
