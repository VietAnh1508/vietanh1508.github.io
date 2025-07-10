import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [
      tailwindcss(),
      sveltekit()
  ],
});
