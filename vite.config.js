import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 1. Soo dhoway feylka 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 2. Halkan ku qeex inay '@' u taagan tahay folder-ka 'src'
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
