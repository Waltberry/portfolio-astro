
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://waltberry.github.io', // change this (or leave undefined if using Vercel)
  integrations: [tailwind({ applyBaseStyles: true })],
  output: 'static'
});
