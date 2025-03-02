import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Fixes HMR issues on some systems
    },
    host: true, // Allows network access
    port: 5173, // Default Vite port
  },
});
