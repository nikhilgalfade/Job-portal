import React from 'react';
import featureImage from '../assets/features.png'; // Replace with your actual file name

const features = [
  {
    title: '#1 Quality Job',
    description:
      'Delivering high-quality, future-ready jobs that match your skills and ambitions.',
  },
  {
    title: '#2 Top Companies',
    description:
      'Get hired by leading companies and industry giants, all in one place',
  },
  {
    title: '#3 International Jobs',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
  },
  {
    title: '#4 No Extra Charges',
    description:
      'All services for job seekers are completely free — no hidden costs, ever.',
  },
];

const Features = () => {
  return (
    <div className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image */}
        <div className="flex justify-center">
          <img
            src={featureImage}
            alt="Feature"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-blue-600 font-semibold uppercase mb-2">Advanced Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Trusted & Popular<br />Job Portal
          </h3>
          <p className="text-gray-600 mb-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Features;
