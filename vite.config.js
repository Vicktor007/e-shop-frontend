import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //   //   "/api/": "https://e-shop-api-bnt6.onrender.com",
  //   //   "/uploads/": "https://e-shop-api-bnt6.onrender.com",
  //   //   "/api/": "http://localhost:5000",
  //   //   "/uploads/": "http://localhost:5000",
  //   },
  // },
});

// https://e-shop-api-bnt6.onrender.com
