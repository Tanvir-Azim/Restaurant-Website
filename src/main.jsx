import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroContax } from './Components/HeroContax.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroContax>
      <App />
    </HeroContax>
  </StrictMode>,
)
