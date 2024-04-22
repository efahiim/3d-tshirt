import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces/"),
      "@configs": path.resolve(__dirname, "./src/configs/"),
      "@store": path.resolve(__dirname, "./src/store/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@canvas": path.resolve(__dirname, "./src/canvas/"),
    },
  },
});
