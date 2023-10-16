import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import { UserContextProvider } from './Context/UserContextProvider.tsx'
import { CreditsContextProvider } from './Context/CreditsContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID} >
      <QueryClientProvider client={client}>
        <UserContextProvider>
          <CreditsContextProvider>
            <Routes />
          </CreditsContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
  </GoogleOAuthProvider>
)
