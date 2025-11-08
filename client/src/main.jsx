import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './store/Auth.jsx';
import App from './App.jsx'
import "../src/index.css";
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
<AuthProvider>
  <StrictMode>
    <App />
            <ToastContainer/>
  </StrictMode>
  </AuthProvider>
)
