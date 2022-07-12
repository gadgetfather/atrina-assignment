import { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";

import {
  CartPage,
  Homepage,
  InventoryPage,
  LoginPage,
  ProductPage,
  SignupPage,
} from "./pages";
function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <div>
      <div className="page_container">
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
