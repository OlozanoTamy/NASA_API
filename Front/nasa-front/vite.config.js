import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      proxy: {
        // Solo se aplica en modo de desarrollo
        '/nasa': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    define: {
      'process.env': {
        VITE_API_URL: mode === 'development'
          ? 'http://localhost:3000'  // URL para desarrollo
          : 'https://nasa-api-1-i90l.onrender.com'  // URL para producción
      },
    },
  };
});
