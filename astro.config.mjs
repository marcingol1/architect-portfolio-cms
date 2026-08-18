import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://architektgol.pl',
  integrations: [sitemap()],
});
