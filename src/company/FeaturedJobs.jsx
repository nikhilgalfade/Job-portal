import React from 'react';
import TiltedCard from './TiltedCard';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Techify Solutions',
    location: 'Remote',
    salary: '$60k - $80k',
    type: 'Full-Time',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'DesignPro',
    location: 'Mumbai, India',
    salary: '₹5L - ₹10L',
    type: 'Contract',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'CodeWorks',
    location: 'Bangalore, India',
    salary: '₹7L - ₹12L',
    type: 'Full-Time',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png', // NodeJS
  },
  {
    id: 4,
    title: 'Backend Engineer',
    company: 'CodeWorks',
    location: 'Bangalore, India',
    salary: '₹7L - ₹12L',
    type: 'Full-Time',
     logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png', // Python
  },
  {
    id: 5,
    title: 'Backend Engineer',
    company: 'CodeWorks',
    location: 'Bangalore, India',
    salary: '₹7L - ₹12L',
    type: 'Full-Time',
    logo: 'https://cdn-icons-png.flaticon.com/512/873/873120.png', // Cloud
  },
  {
    id: 6,
    title: 'Backend Engineer',
    company: 'CodeWorks',
    location: 'Bangalore, India',
    salary: '₹7L - ₹12L',
    type: 'Full-Time',
     logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', // Docker
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Featured Jobs
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          Explore the hottest job openings handpicked just for you.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <TiltedCard
              key={job.id}
              imageSrc="https://source.unsplash.com/400x300/?job,office"
              altText={job.title}
              captionText={job.title}
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              
              overlayContent={
  <div className="text-black text-sm text-center">
    {job.logo && (
      <img
        src={job.logo}
        alt="logo"
        className="w-12 h-12 object-contain mx-auto mb-2"
      />
    )}
    <p className="font-bold text-lg">{job.title}</p>
    <p>{job.company}</p>
    <p>{job.location}</p>
    <p>{job.salary}</p>
    <p className="text-blue-200 mt-2">{job.type}</p>
    <button className="mt-2 border border-blue px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition">
      Apply Now
    </button>
  </div>
}



            />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;

