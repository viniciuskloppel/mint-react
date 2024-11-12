import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  target: "esnext",
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  external: ["react", "react-dom"],
});
