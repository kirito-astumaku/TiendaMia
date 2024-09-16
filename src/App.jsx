
import NAvbar from "./components/NAvbar";
import { BrowserRouter } from 'react-router-dom';
import Rutas from "./routers/Rutas";
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import { useState } from 'react'


function App() {

  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="padre">
      <ProductProvider>

        <AuthProvider>

         <BrowserRouter>

         <NAvbar  setSearchTerm={setSearchTerm} />

        <CartProvider>

         <Rutas  searchTerm={searchTerm}/>

         </CartProvider>
         
         
       </BrowserRouter>

       </AuthProvider>

      </ProductProvider>
      
    </div>
  )
}

export default App
