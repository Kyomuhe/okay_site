// Home.js
import React from "react";
import { Link } from "react-router-dom";
import dep1 from "../dep1.PNG"; // Import the image file

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-gray-700">It's Okay App</h1>
          <nav className="flex gap-4">
            <Link
              to="/signup"
              className="text-gray-700 hover:text-mint-500 px-3 py-2 rounded transition"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-gray-700 hover:text-mint-500 px-3 py-2 rounded transition"
            >
              Sign In
            </Link>
            <Link
              to="/read"
              className="text-gray-700 hover:text-mint-500 px-3 py-2 rounded transition"
            >
              Read Stories
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content with Background Image */}
      <main
        className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white shadow-md mx-6 my-8 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${dep1})` }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Find Support and Connection
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We understand that life can be tough. Here at *It's Okay App*, you'll find a community of people who care and are ready to listen.
          </p>
          <Link
            to="/read"
            className="inline-block px-6 py-3 bg-mint-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-mint-600 transition transform hover:-translate-y-1"
          >
            Read Stories
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 text-center py-4 text-sm text-gray-600 border-t border-gray-300">
        © 2024 It's Okay App. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
