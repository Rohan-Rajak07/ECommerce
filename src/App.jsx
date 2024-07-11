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
        <Route path="/" element={<Home/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
    </Router>
  )
}

export default App