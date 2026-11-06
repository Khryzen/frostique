import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://khryzen.github.io',
  base: '/frostique',
  trailingSlash: 'always',
  integrations: [svelte()],
  output: 'static',
});
