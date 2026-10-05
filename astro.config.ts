// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import seoGraph from '@jdevalk/astro-seo-graph/integration';
import icon from 'astro-icon';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://floristeriarosi.vercel.app',
  prefetch: {
    defaultStrategy: 'viewport',
  },
  integrations: [
    tailwind(), 
    icon(), 
    sitemap(), 
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    seoGraph({
      validateH1: true,
      validateUniqueMetadata: true,
      validateImageAlt: true,
      validateInternalLinks: true
    })
  ],
  image: {
    domains: ['images.unsplash.com'],
  },
});
