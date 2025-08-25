import React from 'react';
import {
  Laptop,
  TrendingUp,
  Hospital,
  BookOpen,
  Wallet,
  Wrench
} from 'lucide-react';

const categories = [
  { name: 'IT & Software', Icon: Laptop, jobs: '120 Jobs', color: 'bg-blue-100 text-blue-600' },
  { name: 'Sales & Marketing', Icon: TrendingUp, jobs: '80 Jobs', color: 'bg-pink-100 text-pink-600' },
  { name: 'Healthcare', Icon: Hospital, jobs: '50 Jobs', color: 'bg-green-100 text-green-600' },
  { name: 'Education', Icon: BookOpen, jobs: '60 Jobs', color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Finance', Icon: Wallet, jobs: '40 Jobs', color: 'bg-purple-100 text-purple-600' },
  { name: 'Engineering', Icon: Wrench, jobs: '70 Jobs', color: 'bg-orange-100 text-orange-600' },
];

const TopCategories = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Top Categories</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform duration-300 text-center"
          >
            <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${cat.color} mb-4`}>
              <cat.Icon size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{cat.name}</h3>
            <p className="text-gray-500">{cat.jobs}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
  <button className="border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white">
    Explore More Categories
  </button>
</div>


    </div>
  );
};

export default TopCategories;
