import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["html", "text", "json", "json-summary"],
      enabled: true,
      include: ["src/**/*"],
    },
    environment: "happy-dom",
  },
});
