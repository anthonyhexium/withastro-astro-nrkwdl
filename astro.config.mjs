import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['a.storyblok.com']
  },
  output: "server",
  adapter: vercel({
    // COMMENTED DURING DEV
    // imageService: true,
    // imagesConfig: {
    //   sizes: [384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    //   formats: ["image/avif", "image/webp"],
    //   domains: ['a.storyblok.com'],
    // },
    // JUST A TRY
    // devImageService: 'sharp',
  })
});