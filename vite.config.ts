import devtoolsJson from "vite-plugin-devtools-json";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
  server: {
    proxy: {
      "/api": {
        // target: "https://solid-own.deno.dev/",
        target: "https://solid-own-server-mf6acd8dhe5a.xx-98946.deno.net",
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
});
