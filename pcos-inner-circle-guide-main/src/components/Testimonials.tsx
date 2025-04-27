
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The buddy system helped me feel understood for the first time.",
      name: "Priya S.",
      role: "Member since beta",
      avatar: "P"
    },
    {
      quote: "The insights helped me stay consistent with my treatment.",
      name: "Sarah M.",
      role: "Early adopter",
      avatar: "S"
    },
    {
      quote: "Finally, an app that understands PCOS is more than just weight and fertility.",
      name: "Laura K.",
      role: "PCOS Advocate",
      avatar: "L"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-pcos-lavender/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What Our Community Says</h2>
          <div className="w-24 h-1 bg-pcos-purple mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-pcos-purple text-white flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                
                <p className="text-gray-600 mb-6 pt-3">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pcos-pink rounded-full flex items-center justify-center text-pcos-purple font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 text-gray-500 text-sm">
            <p>* Testimonials based on early feedback from our test users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
