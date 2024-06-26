import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.GOOGLE_CLIENT_ID': JSON.stringify(env.GOOGLE_CLIENT_ID),
            'process.env.PAYPAL_CLIENT_ID': JSON.stringify(env.PAYPAL_CLIENT_ID),
            'process.env.API_URL': JSON.stringify(env.API_URL),
            'process.env.CRYPTO_SECRET_KEY': JSON.stringify(env.CRYPTO_SECRET_KEY)
        },
    };
});