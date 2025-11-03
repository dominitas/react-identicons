import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-identicons',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['crypto-js'],
  },
});
