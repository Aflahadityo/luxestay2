import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container mx-auto py-8">
        {/* Konten lainnya */}
      </div>
      <footer className="bg-gray-800 py-4 text-white text-center">
        <p>&copy; 2023 Tour & Travel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
