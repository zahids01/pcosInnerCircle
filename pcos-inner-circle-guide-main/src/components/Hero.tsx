
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 wave-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
              Your Companion in the Journey of PCOS Wellness
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Personalized support, daily guidance, and treatment insights — all in one place
            </p>
            <Button 
              className="bg-pcos-purple hover:bg-pcos-purple/90 text-white py-2 px-6 rounded-lg text-lg"
              size="lg"
              asChild
            >
              <a href="#waitlist">Join the Waitlist</a>
            </Button>
          </div>
          <div className="md:w-1/2 px-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-pcos-lavender rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="70%"
                    height="70%"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFDEE2"
                      d="M44.7,-76.9C59.3,-69.9,73.3,-60.1,80.9,-46.4C88.5,-32.8,89.8,-15.2,87.8,1.1C85.7,17.5,80.3,32.8,71.7,46.2C63.2,59.6,51.5,71.2,37.8,76.2C24.2,81.3,8.5,79.8,-5.6,76.8C-19.7,73.7,-32.1,69.1,-43.5,62.2C-54.9,55.3,-65.2,46.2,-71.5,34.5C-77.7,22.8,-79.9,8.5,-78.9,-5.7C-77.9,-20,-73.7,-34.3,-65.6,-45.8C-57.6,-57.2,-45.7,-65.8,-33.1,-71.9C-20.4,-78.1,-7,-81.9,7.2,-84.2C21.3,-86.5,30.1,-83.9,44.7,-76.9Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-center w-full px-4">
                    <div className="w-24 h-24 mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        width="60%"
                        height="60%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          fill="#9C7AD8"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">PCOS Buddy</h3>
                    <p className="text-gray-600">Personalized guidance, always with you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
