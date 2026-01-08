import React from "react";
import { motion } from "framer-motion";

// Add Google Font link to head
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  const isActive = (path) => {
    return currentPath === path;
  };

  const handleNavClick = (path) => {
    setCurrentPath(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="relative" style={{ zIndex: 10 }}>
      {/* Wave Navigation Bar - reduced height on mobile */}
      <div className="relative h-[60px] md:h-[80px] bg-[#efe8d5]">
        {/* Logo positioned on the wave */}
        <a 
          href="/" 
          onClick={() => { handleNavClick('/'); window.scrollTo(0, 0); }}
          className="absolute left-4 md:left-8 z-10 flex items-center cursor-pointer"
          style={{ top: 'calc(50% + 20px)', transform: 'translateY(-50%)' }}
        >
          <img
            src="/assets/Logo1.png" 
            alt="Details of Greensboro Logo" 
            className="hidden md:block h-18 w-18 mr-3 rounded-xl"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <h1 className="text-2xl md:text-3xl text-[#2F3A1D] font-normal" style={{ fontFamily: "'Permanent Marker', cursive" }}>Details of Greensboro</h1>
        </a>
        
        {/* Desktop navigation on wave */}
        <div 
          className="hidden md:flex absolute right-8 z-10 space-x-8 items-center"
          style={{ top: 'calc(50% + 20px)', transform: 'translateY(-50%)' }}
        >
          <a 
            href="/" 
            onClick={() => handleNavClick('/')}
            className="text-lg font-bold tracking-wide transition-colors relative text-[#2F3A1D] hover:text-[#2F3A1D]"
          >
            HOME
            {isActive("/") && (
              <motion.div 
                layoutId="navbar-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2F3A1D]"
              />
            )}
          </a>
          <a 
            href="/services" 
            onClick={() => handleNavClick('/services')}
            className="text-lg font-bold tracking-wide transition-colors relative text-[#2F3A1D] hover:text-[#2F3A1D]"
          >
            SERVICES
            {isActive("/services") && (
              <motion.div 
                layoutId="navbar-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2F3A1D]"
              />
            )}
          </a>
          <a 
            href="/about" 
            onClick={() => handleNavClick('/about')}
            className="text-lg font-bold tracking-wide transition-colors relative text-[#2F3A1D] hover:text-[#2F3A1D]"
          >
            ABOUT
            {isActive("/about") && (
              <motion.div 
                layoutId="navbar-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2F3A1D]"
              />
            )}
          </a>
          <a 
            href="/contact" 
            onClick={() => handleNavClick('/contact')}
            className="text-lg font-bold tracking-wide transition-colors relative text-[#2F3A1D] hover:text-[#2F3A1D]"
          >
            CONTACT
            {isActive("/contact") && (
              <motion.div 
                layoutId="navbar-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2F3A1D]"
              />
            )}
          </a>
          <a 
            href="https://instagram.com/detailsofgreensboro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2F3A1D] hover:text-[#2F3A1D] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
        
        {/* Mobile menu button on wave */}
        <button 
          className="md:hidden absolute right-4 z-50"
          style={{ top: 'calc(50% + 20px)', transform: 'translateY(-50%)' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className={`w-6 h-6 text-[#2F3A1D]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Wave SVG - reduced height on mobile */}
        <div 
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" 
          style={{ transform: 'translateY(99%) rotate(180deg)' }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
            className="relative block w-full h-[70px] md:h-[100px]"
            style={{ display: 'block' }}
          >
            <path 
              d="m0 192 80-24C160 144 320 104 480 124c160 20 320 76 480 96s320-20 400-40l80-20v192H0Z"
              fill="#efe8d5"
            />
          </svg>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed inset-0 bg-[#efe8d5] md:hidden"
          style={{ zIndex: 9999 }}
        >
          <button 
            className="absolute right-4 top-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-6 h-6 text-[#2F3A1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="/" onClick={() => { handleNavClick('/'); window.scrollTo(0, 0); }} className="text-2xl font-medium text-[#2F3A1D] hover:text-[#619196]">HOME</a>
            <a href="/services" onClick={() => { handleNavClick('/services'); window.scrollTo(0, 0); }} className="text-2xl font-medium text-[#2F3A1D] hover:text-[#619196]">SERVICES</a>
            <a href="/about" onClick={() => { handleNavClick('/about'); window.scrollTo(0, 0); }} className="text-2xl font-medium text-[#2F3A1D] hover:text-[#619196]">ABOUT</a>
            <a href="/contact" onClick={() => { handleNavClick('/contact'); window.scrollTo(0, 0); }} className="text-2xl font-medium text-[#2F3A1D] hover:text-[#619196]">CONTACT</a>
            <a href="https://instagram.com/detailsofgreensboro" target="_blank" rel="noopener noreferrer" className="text-[#2F3A1D] hover:text-[#619196] transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;