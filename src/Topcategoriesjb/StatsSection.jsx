import React from 'react';
import { Briefcase, Users, Globe, UserCheck } from 'lucide-react'; // Optional: use Lucide icons
import CountUp from './CountUp'; // Adjust path if needed

const stats = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
    label: "Active Jobs",
    value: <CountUp to={12500} separator="," duration={2} className="text-2xl font-bold text-gray-800" />

  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    label: "Employers",
     value: <CountUp to={3200} separator="," duration={2} className="text-2xl font-bold text-gray-800" />,
  },
  {
    icon: <UserCheck className="w-8 h-8 text-purple-500" />,
    label: "Job Seekers",
    value: <CountUp to={85000} separator="," duration={2} className="text-2xl font-bold text-gray-800" />,
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-500" />,
    label: "Countries Covered",
     value: <CountUp to={45} separator="," duration={2} className="text-2xl font-bold text-gray-800" />,
  },
];

const StatsSection = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Platform Statistics
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 text-center hover:-translate-y-1 transition transform duration-300 border border-gray-200"
          >
            <div className="flex justify-center items-center mb-4">
              {stat.icon}
            </div>
            <div>{stat.value}</div>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
