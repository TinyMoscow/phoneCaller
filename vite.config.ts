import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // open: "http://0.0.0.0:80",
    host: "0.0.0.0",
    port: 80,
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@templates": path.resolve(__dirname, "src/components/templates/*"),
    },
  },
});
