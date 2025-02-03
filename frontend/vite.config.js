import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { backend_url } from "./src/App";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      proxy: {
         "/api": {
            target: backend_url,
         },
      },
   },
});
