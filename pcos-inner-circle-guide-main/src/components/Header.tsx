
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-semibold text-xl tracking-tight text-pcos-purple">PCOS Buddy</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-pcos-purple transition-colors">About</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-pcos-purple transition-colors">How It Works</a>
            <a href="#features" className="text-gray-600 hover:text-pcos-purple transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-pcos-purple transition-colors">Testimonials</a>
            <Button className="bg-pcos-purple hover:bg-pcos-purple/90" asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 text-gray-600 hover:text-pcos-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 text-gray-600 hover:text-pcos-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="block px-3 py-2 text-gray-600 hover:text-pcos-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-gray-600 hover:text-pcos-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="w-full mt-2 bg-pcos-purple hover:bg-pcos-purple/90" asChild>
              <a 
                href="#waitlist"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
