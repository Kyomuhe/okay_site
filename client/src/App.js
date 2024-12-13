// App.js
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Read from "./components/read";
import Home from "./components/Home"; 
import ProfessionalRegistration from "./components/ProfessionalRegistration";
import NormalAccountForm from "./components/NormalAccountForm";
import AnonymousHelpForm from "./components/AnonymousHelpForm";
import FullDetailsForm from "./components/FullDetailsForm";


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
                        <Route path="/ProfessionalRegistration" element={<ProfessionalRegistration />} />
                        <Route path="/NormalAccountForm" element={<NormalAccountForm />} />
                        <Route path="/AnonymousHelpForm" element={<AnonymousHelpForm/>}/>
                        <Route path="/FullDetailsForm" element={<FullDetailsForm/>}/>



                        {/* If no path matches, it redirects to the home route */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;