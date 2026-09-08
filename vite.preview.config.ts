// A throwaway config that inlines the whole site into ONE html file, so a
// preview can be handed around without a server. Not for production:
// `npm run build` (vite.config.ts) is what goes to the host.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  define: { "import.meta.env.VITE_HASH_ROUTER": JSON.stringify("1") },
  build: { outDir: "dist-preview", assetsInlineLimit: 100000000, cssCodeSplit: false },
});
