import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import { UserContextProvider } from './Context/UserContextProvider.tsx'
import { CreditsContextProvider } from './Context/CreditsContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import { PurchaseContextProvider } from './Context/PurchaseContext.tsx'
import { PricingAccessContextProvider } from './Context/PricingAccessContext.tsx'
import { DarkThemeProvider } from './Context/DarkThemeContext.tsx'

const client = new QueryClient()

const initialOptions = {
  clientId: process.env.PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture"
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID} >
    <PayPalScriptProvider options={initialOptions}>
      <QueryClientProvider client={client}>
        <PricingAccessContextProvider>
          <PurchaseContextProvider>
            <UserContextProvider>
              <CreditsContextProvider>
                <DarkThemeProvider>
                  <Routes />
                </DarkThemeProvider>
              </CreditsContextProvider>
            </UserContextProvider>
          </PurchaseContextProvider>
        </PricingAccessContextProvider>
      </QueryClientProvider>
    </PayPalScriptProvider>
  </GoogleOAuthProvider>
)
