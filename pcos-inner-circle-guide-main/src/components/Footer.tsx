
import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-semibold text-lg text-pcos-purple mb-2">PCOS Buddy</p>
            <p className="text-gray-500 text-sm">Your companion in the journey of PCOS wellness</p>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0">
            <p className="font-medium text-gray-700 mb-2">Quick Links</p>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-500 hover:text-pcos-purple transition-colors text-sm">About Us</a>
              <a href="#how-it-works" className="text-gray-500 hover:text-pcos-purple transition-colors text-sm">How It Works</a>
              <a href="#features" className="text-gray-500 hover:text-pcos-purple transition-colors text-sm">Features</a>
              <a href="#testimonials" className="text-gray-500 hover:text-pcos-purple transition-colors text-sm">Testimonials</a>
            </div>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0">
            <p className="font-medium text-gray-700 mb-2">Legal</p>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-500 hover:text-pcos-purple transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-pcos-purple transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-pcos-purple transition-colors text-sm">DPDP Compliance</a>
            </div>
          </div>
          
          <div className="flex flex-col">
            <p className="font-medium text-gray-700 mb-2">Connect With Us</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pcos-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pcos-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@pcosbuddy.com" className="text-gray-500 hover:text-pcos-purple transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PCOS Buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
