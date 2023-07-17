import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID} >
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </GoogleOAuthProvider>
)
