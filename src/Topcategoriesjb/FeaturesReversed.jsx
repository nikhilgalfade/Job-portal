import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import featureImg from '../assets/job.png'; // Change name if needed

const points = [
  {
    title: 'Easy Application Process',
    description: 'Apply for jobs with just a few clicks using our simple platform.',
  },
  {
    title: 'Verified Employers',
    description: 'Connect only with companies that are verified and trusted.',
  },
  {
    title: 'Real-time Notifications',
    description: 'Get instantly notified for job matches and updates.',
  },
  {
    title: 'Personalized Dashboard',
    description: 'Manage your applications and saved jobs with ease.',
  },
];

const FeaturesReversed = () => {
  return (
    <div className="w-full bg-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Side: Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-blue-600 text-lg font-semibold mb-8">Advanced & User-Friendly Features</p>
          
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{point.title}</h4>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full">
          <img src={featureImg} alt="Feature" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesReversed;
