import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-greensboro-green text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="logo-text text-2xl mb-2">Details of Greensboro</h2>
            <p className="text-sm opacity-80">Professional Auto Detailing Services</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <Link to="/" className="hover:text-greensboro-cream transition-colors">Home</Link>
            <Link to="/services" className="hover:text-greensboro-cream transition-colors">Services</Link>
            <Link to="/about" className="hover:text-greensboro-cream transition-colors">About</Link>
            <Link to="/contact" className="hover:text-greensboro-cream transition-colors">Contact</Link>
          </div>
          
          <div className="mt-6 md:mt-0">
            <a 
              href="https://instagram.com/detailsofgreensboro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-greensboro-cream transition-colors"
            >
              <Icon icon="logos:instagram-icon" className="text-2xl" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-6 text-center text-sm opacity-70">
          <p>Copyright © {new Date().getFullYear()} Details of Greensboro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;