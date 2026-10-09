// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://Ston3tom.github.io',
  base: '/KZ_Portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
