/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the built app works served from /game/dist/ next to the
  // static LAINIE.EXE site with no host configuration.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2022',
    chunkSizeWarningLimit: 1500,
  },
  server: { host: true },
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
  },
});
