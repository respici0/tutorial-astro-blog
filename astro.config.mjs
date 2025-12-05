// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://fc07d3e2.tutorial-astro-blog.pages.dev/",
  integrations: [react()],
});
