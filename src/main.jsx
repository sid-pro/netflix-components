import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Practices } from './Practices.jsx'
import { Profile } from './components/Profile.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* <Practices/> */}

    {/* passing JSX in a props */}
    {/* <Profile/> */}
  </StrictMode>,
)
