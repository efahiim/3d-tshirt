
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@models": path.resolve(__dirname, "./src/models/"),
    },
  },
});
