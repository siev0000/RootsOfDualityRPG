import { defineConfig } from 'vite';
import { rpgjs, tiledMapFolderPlugin } from '@rpgjs/vite';
import startServer from './src/server';

export default defineConfig({
  plugins: [
    ...rpgjs({
      server: startServer
    })
  ], 
});
