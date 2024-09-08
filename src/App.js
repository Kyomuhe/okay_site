import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Signup from './signup'; 
import Signin from './signin';
import Read from './read';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="auth-buttons">
          <Link to="/signup"><button className="auth-button">Sign Up</button></Link>
          <Link to ="/signin"><button className="auth-button">Sign In</button></Link>
        </div>
        <p>
          Welcome to okay app where you are understood.
        </p>
        <Link to="/read" className="App-link">
          Read Stories
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {}
        <Route path="/signup" element={<Signup />} />  {}
        <Route path="/signin" element={<Signin/>} />   {}
        <Route path="/read" element={<Read/>} />   {}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
