import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/user.context.jsx'
import App from './App.jsx'
import './index.scss'
import { ProductProvider } from './context/product.context.jsx'
import { CartProvider } from './context/cart.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
