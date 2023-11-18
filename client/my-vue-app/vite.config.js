import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': process.env, // Make Node.js environment variables available
//     'import.meta.env.VITE_BACKEND_URL': process.env.VITE_BACKEND_URL || 'http://localhost:3003',
//   },
// });