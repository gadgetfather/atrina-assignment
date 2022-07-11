import { useState } from "react";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="page_container">
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
