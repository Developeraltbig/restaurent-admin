import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Cart from './components/Cart'
import AdminLayout from './admin/AdminLayout';
import AdminHome from './admin/Home';
import AdminLogin from './admin/Login';
import Orders from './admin/Orders';
import Menu from './admin/Menu';
import QrCode from './admin/Qr';
// // Placeholder components for other admin pages
// const AdminOrders = () => <div className="p-8"><h1>Orders Page</h1></div>;
// const AdminMenu = () => <div className="p-8"><h1>Menu Page</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for your main user-facing application */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        {/* ... other main app routes */}

        {/* --- Admin Panel Routes --- */}
        {/* The login page is separate and does not use the AdminLayout */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* All other admin routes are nested inside AdminLayout */}
        {/* This makes them share the sidebar and header */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/menu" element={<Menu />} />
          <Route path="/admin/QrCode" element={<QrCode />}/>
          {/* Add other nested admin routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;