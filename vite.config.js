import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // 沿用 CRA 的默认端口，避免习惯改变
    open: true, // 启动时自动打开浏览器
  },
  build: {
    outDir: "dist", // 打包输出目录（CRA 是 build，可改为 build 保持一致）
    sourcemap: false, // 生产环境关闭 sourcemap，减小包体积
  },
});
