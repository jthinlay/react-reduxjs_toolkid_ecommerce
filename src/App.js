import React from 'react'
import Home from "./features/Home"
import Cart from './features/Cart'
import ProductList from './features/ProductList'
import Login from './features/Login'
import Register from './features/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ResetPassword from './features/ResetPassword'
import OnSale from './features/onSale/OnSale'
import Product from './features/IndividaulProduct'
import CategoryProductsDisplay from './features/category/categoryProducts/CategoryProducts'
import IndividualProduct from './features/category/categoryProducts/CategoryProduct'


function App() {
  return (
    <BrowserRouter >  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":itemId" element={<OnSale />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="category/:categoryId" element={<CategoryProductsDisplay />} />
          <Route path="categoryItem/:categoryItemId" element={<IndividualProduct />} />
          <Route path="productList" element ={<ProductList />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="reset" element={<ResetPassword/>} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
