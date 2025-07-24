// src/App.js
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";


import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-wrapper">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/service" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
