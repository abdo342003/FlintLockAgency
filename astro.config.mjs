// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://flintlock.io',
  output: 'static',
  adapter: cloudflare(),
  integrations: [icon(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        fr: 'fr',
      },
    },
  })],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
