import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './project-7/ContextApp/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { store } from './redux/store.js'
import  { ToastContainer } from "react-toastify"
import { store } from './Redux-Concepts/Slice/store.js'
import Toaster from 'react-hot-toast'




createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       
            <Provider store={store}>
                <App />
                <Toaster/>
            </Provider>
        
    </BrowserRouter>

)
