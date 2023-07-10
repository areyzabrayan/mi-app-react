import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from '../components/products/products';
import Users from '../components/users/users';
import Home from '../components/home/home';
import Test from '../components/test/test';

const Router = () => {
  
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}>
            <Route path='/' element={<Test />}/>
            <Route path='users' element={<Users />}/>
            <Route path='products' element={<Products />}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;