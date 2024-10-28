import React from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './signup';
import Signin from './signin';
import Read from './read';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="top-menu">
            <h1 className="app-name">Yore App</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
              <Link to="/read">Read Stories</Link>
            </nav>
          </div>
        </header>

        {}
        <div className="main-content">
          <Routes>
            {/* Route for Home */}
            <Route 
              path="/" 
              element={
                <div className="content">
                  <h2>Find Support and Connection</h2>
                  <p>
                    We understand that life can be tough. Here at yore App, you'll find a community of people who care and are ready to listen.
                  </p>
                </div>
              } 
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/read" element={<Read />} />
            {/* If no path matches, it redirects to the home route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        
        <footer className="App-footer">
          &copy; 2024 Yore App
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
