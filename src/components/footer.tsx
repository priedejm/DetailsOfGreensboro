import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-greensboro-green text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/assets/Logo1.png" 
                alt="D.O.G Logo" 
                className="h-16 w-16 rounded-xl mr-3 opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h2 className="logo-text text-xl font-bold">Details of Greensboro</h2>
                <p className="text-greensboro-cream text-sm">D.O.G.</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              New school ideas with old school work ethic. Keeping Greensboro's cars clean, one detail at a time.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/detailsofgreensboro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-greensboro-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Icon icon="lucide:instagram" className="text-lg" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-white/70 hover:text-greensboro-cream transition-colors flex items-center">
                  <Icon icon="lucide:chevron-right" className="mr-1 text-sm" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-white/70 hover:text-greensboro-cream transition-colors flex items-center">
                  <Icon icon="lucide:chevron-right" className="mr-1 text-sm" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-white/70 hover:text-greensboro-cream transition-colors flex items-center">
                  <Icon icon="lucide:chevron-right" className="mr-1 text-sm" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-white/70 hover:text-greensboro-cream transition-colors flex items-center">
                  <Icon icon="lucide:chevron-right" className="mr-1 text-sm" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-white/70 hover:text-greensboro-cream transition-colors flex items-center">
                  <Icon icon="lucide:chevron-right" className="mr-1 text-sm" />
                  Basic Detail Package
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-white/70 hover:text-greensboro-cream transition-colors flex items-center">
                  <Icon icon="lucide:chevron-right" className="mr-1 text-sm" />
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-white/70 hover:text-greensboro-cream transition-colors flex items-center">
                  <Icon icon="lucide:chevron-right" className="mr-1 text-sm" />
                  Headlight Restoration
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-white/70 hover:text-greensboro-cream transition-colors flex items-center">
                  <Icon icon="lucide:chevron-right" className="mr-1 text-sm" />
                  Steam Cleaning
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:3365426266" className="flex items-start text-white/70 hover:text-greensboro-cream transition-colors">
                  <Icon icon="lucide:phone" className="mr-3 mt-1 text-greensboro-accent" />
                  <div>
                    <p className="font-medium text-white">(336) 542-6266</p>
                    <p className="text-xs">Call or Text</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@detailsofgreensboro.com" className="flex items-start text-white/70 hover:text-greensboro-cream transition-colors">
                  <Icon icon="lucide:mail" className="mr-3 mt-1 text-greensboro-accent" />
                  <div>
                    <p className="font-medium text-white">info@detailsofgreensboro.com</p>
                    <p className="text-xs">Email us anytime</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start text-white/70">
                  <Icon icon="lucide:clock" className="mr-3 mt-1 text-greensboro-accent" />
                  <div>
                    <p className="font-medium text-white">Mon - Sat: 9am - 7pm</p>
                    <p className="text-xs">Sunday: Email us</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start text-white/70">
                  <Icon icon="lucide:map-pin" className="mr-3 mt-1 text-greensboro-accent" />
                  <div>
                    <p className="font-medium text-white">Greensboro, NC</p>
                    <p className="text-xs">Mobile service available</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Details of Greensboro. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Made with 🤍 in Greensboro, NC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;