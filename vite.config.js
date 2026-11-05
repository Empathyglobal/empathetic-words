import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
export default defineConfig({plugins:[react()],base:'./',resolve:{alias:{'@':fileURLToPath(new URL('./src',import.meta.url))}},build:{rollupOptions:{output:{manualChunks:{charts:['recharts'],motion:['framer-motion']}}}},test:{environment:'jsdom',setupFiles:['./tests/setup.js']}});
