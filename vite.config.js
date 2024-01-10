import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://e-shop-api-bnt6.onrender.com",
      "/uploads/": "https://e-shop-api-bnt6.onrender.com",
    },
  },
});

// https://e-shop-api-bnt6.onrender.com
