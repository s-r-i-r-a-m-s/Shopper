
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import ShopCatagory from './Pages/ShopCatagory';
import Shop from './Pages/Shop'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatagory catagory='mens'/>}/>
        <Route path='/womens' element={<ShopCatagory catagory="womens"/>}/>
        <Route path='/kids' element={<ShopCatagory catagory="kids"/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
       <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App