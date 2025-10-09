import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ 這裡請改成你的 GitHub Repository 名稱
export default defineConfig({
  base: "/liu-ren-app/",
  plugins: [react()],
});
