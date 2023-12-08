export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GOOGLE_CLIENT_ID: string
            PAYPAL_CLIENT_ID: string
            API_URL: string,
            CRYPTO_SECRET_KEY: string
        }
    }
}