import React from 'react'
import Home from './Component/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Explore from './Component/Router/Explore/Explore';
import Camera from './Component/Router/Camera/Camera';
import Accessories from './Component/Router/Accessories/Accessories';
import AddContextProvider from './Context/AddContext';
import CartProduct from './Component/Service/Product/CartProduct';

function App() {
  return (
    <>
    <AddContextProvider>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="camera" element={<Camera/>}></Route>
          <Route path="explore" element={<Explore/>}></Route>
          <Route path="accessories" element={<Accessories/>}></Route>
          <Route path='cartproduct' element={<CartProduct/>}></Route>
       </Routes>
    </BrowserRouter>
    </AddContextProvider>
       {/* <Home/> */}
    </>
  )
}

export default App
