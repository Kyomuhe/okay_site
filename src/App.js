// App.js
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Read from "./components/read";
import Home from "./components/Home"; 

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="main-content">
                    <Routes>
                        {/* Route for Home */}
                        <Route path="/" element={<Home />} /> {/* Use the Home component here */}
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/read" element={<Read />} />
                        {/* If no path matches, it redirects to the home route */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;