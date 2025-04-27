
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Daily Tracker",
      description: "Log mood, cycle, pain, and symptoms with our easy-to-use tracking system",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
          <path d="M8 14h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 18h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M16 18h.01"></path>
        </svg>
      ),
      available: true
    },
    {
      title: "Chatbot Assistant",
      description: "AI + human support to answer your questions and provide guidance when you need it",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M12 7v.01"></path>
          <path d="M16 11v.01"></path>
          <path d="M8 11v.01"></path>
          <path d="M12 15v.01"></path>
        </svg>
      ),
      available: true
    },
    {
      title: "Personalized Nutrition & Lifestyle",
      description: "Get tailored advice based on your unique PCOS profile and symptoms",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8"></path>
          <path d="m16 6-4 4-4-4"></path>
          <path d="M8 16h12a2 2 0 0 0 0-4H8"></path>
          <path d="M12 12v8"></path>
          <path d="M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"></path>
        </svg>
      ),
      available: true
    },
    {
      title: "Medical Record Vault",
      description: "Securely store and organize your medical history and test results in one place",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
          <path d="M10 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
          <path d="M16 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
          <path d="M4 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
          <path d="M16 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
        </svg>
      ),
      available: false
    },
    {
      title: "Wearable Integration",
      description: "Connect your favorite health trackers to gather more comprehensive data insights",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2H8.5a2.5 2.5 0 0 0-5 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6Z"></path>
          <path d="M8 3v2"></path>
          <path d="M12 3v2"></path>
          <path d="M16 3v2"></path>
        </svg>
      ),
      available: false
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Features Preview</h2>
          <div className="w-24 h-1 bg-pcos-purple mx-auto mb-10 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to provide comprehensive support for your PCOS journey, with features that address both physical and emotional well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-6 transition-all duration-300 hover:shadow-md ${feature.available ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pcos-lavender text-pcos-purple">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center">
                {feature.title}
                {!feature.available && (
                  <span className="ml-2 text-xs font-normal bg-gray-200 text-gray-600 py-1 px-2 rounded-full">Coming Soon</span>
                )}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
