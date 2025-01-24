import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Taskprovider from './context/Taskprovider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Taskprovider>

      <App />

    </Taskprovider>
      
   
  </StrictMode>
)
