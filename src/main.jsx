import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* Privacy-friendly page analytics — activates once Web Analytics is
          enabled for the project in the Vercel dashboard; no-op elsewhere. */}
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
