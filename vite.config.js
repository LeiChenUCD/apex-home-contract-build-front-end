import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Load env file based on mode (e.g., .env.production)
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [react()],
        define: {
            'import.meta.env.VITE_API_ENDPOINT': JSON.stringify(env.VITE_API_ENDPOINT),
        },
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_API_ENDPOINT,
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
    };
});
