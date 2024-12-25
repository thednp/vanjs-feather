import { defineConfig } from "vitest/config";
import vanjs from "vite-plugin-vanjs";

export default defineConfig({
  plugins: [vanjs() as any],
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["html", "text", "lcov"],
      enabled: true,
      include: ["src/**/*"],
    },
    environment: "happy-dom",
  },
});
