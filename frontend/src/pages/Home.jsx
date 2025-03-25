// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-gray-600">
          This application provides an overview of our services and features.
        </p>
      </div>
    </div>
  );
};

export default Home;