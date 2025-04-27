
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Track your symptoms and daily feelings',
      description: 'Log your symptoms, mood, cycle, and other health metrics in a simple, intuitive interface.',
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h10"></path>
          <path d="M9 4v16"></path>
          <path d="M14 9v2"></path>
          <path d="M14 5v2"></path>
          <path d="M14 13v2"></path>
          <path d="M14 17v2"></path>
          <path d="M22 12h-8"></path>
        </svg>
      )
    },
    {
      number: 2,
      title: 'Get matched with a PCOS Buddy',
      description: 'Connect with a real person who understands PCOS and can offer support, guidance, and accountability.',
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="6" r="4"></circle>
          <path d="M20 17.5c0 2.5-4 3.5-8 3.5s-8-1-8-3.5V17c0-2.5 4-3.5 8-3.5s8 1 8 3.5v.5z"></path>
        </svg>
      )
    },
    {
      number: 3,
      title: 'Receive personalized insights and lifestyle suggestions',
      description: 'Get tailored recommendations based on your unique symptoms, goals, and health data.',
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 17.58A5 5 0 0 1 17.84 15"></path>
          <circle cx="12" cy="5" r="1"></circle>
          <path d="M15 9.34V6"></path>
          <path d="M11 6v4"></path>
          <path d="m15 6-2 3"></path>
          <path d="M17 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path>
          <path d="M12 18h.24"></path>
          <path d="M17.97 20.91A9 9 0 1 1 6.03 3.09"></path>
        </svg>
      )
    },
    {
      number: 4,
      title: 'Learn from your data and build confidence',
      description: 'Gain insights from your personal health patterns to make informed decisions and build confidence in managing PCOS.',
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-pcos-lavender/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How It Works</h2>
          <div className="w-24 h-1 bg-pcos-purple mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-pcos-purple text-white' : 'bg-pcos-pink text-pcos-purple'}`}>
                  {step.iconPath}
                </div>
              </div>
              <div className={`md:w-2/3 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-pcos-purple' : 'bg-pcos-pink'} text-white font-bold mr-3`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
