
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About Us</h2>
          <div className="w-24 h-1 bg-pcos-purple mx-auto mb-10 rounded-full"></div>
          
          <p className="text-lg text-gray-700 mb-8">
            We are building a digital ecosystem for PCOS, starting with emotional support, health tracking, and personalized guidance through a PCOS Buddy (human + AI).
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-pcos-lavender/30 p-6 rounded-lg flex-1">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9C7AD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Emotional Support</h3>
              <p className="text-gray-600">Connect with people who truly understand your journey with PCOS</p>
            </div>
            
            <div className="bg-pcos-pink/30 p-6 rounded-lg flex-1">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9C7AD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h10"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 9v2"></path>
                  <path d="M14 5v2"></path>
                  <path d="M14 13v2"></path>
                  <path d="M14 17v2"></path>
                  <path d="M22 12h-8"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Health Tracking</h3>
              <p className="text-gray-600">Monitor your symptoms, cycle, and wellness journey with easy tracking tools</p>
            </div>
            
            <div className="bg-pcos-lightGray p-6 rounded-lg flex-1">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9C7AD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v8"></path>
                  <path d="m16 6-4 4-4-4"></path>
                  <path d="M8 16h12a2 2 0 0 0 0-4H8"></path>
                  <path d="M12 12v8"></path>
                  <path d="M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Personalized Guidance</h3>
              <p className="text-gray-600">Get custom insights and recommendations based on your unique PCOS profile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
