import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/bhavin-02/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [react()],
});
