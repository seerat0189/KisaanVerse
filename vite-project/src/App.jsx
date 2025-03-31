import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import Tomato from "./pages/Tomato";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Bid from "./pages/Bid";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/tomato" element={<Tomato />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/login" element={<Login />} />
                <Route path="/bid" element={<Bid />} />
            </Routes>
        </Router>
    );
}

export default App;
