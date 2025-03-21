import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';  // You are importing 'react' here
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude],
    globals: true,
    setupFiles: './tests/setup.ts',
  },
});
