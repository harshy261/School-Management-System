// ./src/components/Common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} School ERP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
