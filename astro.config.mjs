// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_BASE ? 'https://larryflorio.github.io' : 'https://scoffblog.com',
  base: process.env.SITE_BASE ?? '/',
  output: 'static',
});
