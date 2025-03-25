// src/pages/Dashboard.jsx
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/auth/dashboard', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      // Assuming your dashboard endpoint returns a 201 on success; 
      // otherwise, adjust this check to match your backend response (e.g., 200).
      if(response.status !== 201) {
        navigate('/login');
      }
    } catch(err) {
      console.error(err);
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl text-blue-500">Dashboard</h1>
        {/* Additional dashboard content can be added here */}
      </div>
    </>
  );
};

export default Dashboard;
