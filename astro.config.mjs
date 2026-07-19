// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://flintlockagency.com',
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
    lastmod: new Date('2026-07-17'),
    changefreq: 'weekly',
    priority: 0.7,
    serialize(item) {
      item.changefreq = 'weekly';
      item.priority = item.url.endsWith('/fr/') ? 0.6 : 0.7;
      item.lastmod = new Date('2026-07-17');
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'debug': new URL('./src/stubs/debug.mjs', import.meta.url).pathname,
      },
    },
    optimizeDeps: {
      exclude: ['@astrojs/cloudflare'],
    },
    ssr: {
      noExternal: [
        'ms',
        'extract-zip',
        '@iconify/utils',
        '@iconify/tools',
        'cheerio',
        'svgo',
        'domhandler',
        'parse5',
        'htmlparser2',
        'entities',
        'get-stream',
      ],
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
