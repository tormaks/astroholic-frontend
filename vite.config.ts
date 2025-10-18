import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/astroholic-miniapp-frontend/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    process.env.HTTPS ? mkcert() : undefined,
    svgr(),
  ],
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  publicDir: './public',
  server: {
    host: true,
  },
});
