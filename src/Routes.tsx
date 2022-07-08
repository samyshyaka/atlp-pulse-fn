import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrgRegister from './pages/OrgRegister';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/SuperAdmin/Dashboard';
import Orggooglelogin from './pages/Organization/Orggooglelogin';
import Orglogin from './pages/Organization/Orglogin';
import Login from './pages/AdminLogin';
import Pricing from './pages/Pricing';

function MainRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-organization" element={<OrgRegister />} />
          <Route path="/super-admin-dashboard" element={<Dashboard />} />
          <Route path="/org-google-login" element={<Orggooglelogin />} />
          <Route path="/org-login" element={<Orglogin />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default MainRoutes;
