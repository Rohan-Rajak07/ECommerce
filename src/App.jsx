import React from "react";
import { BrowserRouter as Router ,Route , Routes } from "react-router-dom";

import Home from './pages/Home';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Dashboard from './pages/Admin/Dashboard';
import NoPage from './pages/NoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ECommerce" element={<Home/>}></Route>
        <Route path="/ECommerce/order" element={<Order/>}></Route>
        <Route path="/ECommerce/cart" element={<Cart/>} />
        <Route path="/ECommerce/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
    </Router>
  )
}

export default App