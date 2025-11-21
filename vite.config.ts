import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",           // so Vite listens on all interfaces
    port: 8050,                // match what Nginx proxies to
    allowedHosts: [
      "otter-byte.com",
      "www.otter-byte.com",
    ],
    // or to allow everything (less strict, fine for dev):
    // allowedHosts: "all",
  },
});
