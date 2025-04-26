import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: process.env.FAST_API_ENDPOINT, // your FastAPI backend
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
