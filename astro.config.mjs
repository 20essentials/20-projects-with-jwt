// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  //Deploy 20 Projects
  base: '/20-projects-with-jwt/',
  site: 'https://20essentials.github.io/20-projects-with-jwt/'

  //Localhost
  // site: 'http://localhost:4321/'
});
