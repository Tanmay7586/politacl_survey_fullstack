import React from 'react';
import election from '../../assets/images/election.png';

const LeadershipVision = () => {
  return (
    <div className="mt-20">
      <div className="bg-indigo-600 w-40 text-xs font-semibold text-white text-center py-1 px-3 mb-6">
        VISION & MISSION
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 pr-0 md:pr-10 mb-8 md:mb-0">
          <h2 className="text-3xl text-gray-800 font-bold mb-4">
            Every Person Is Important In Election In Our Country
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet.
          </p>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300">
            Join Now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={election}
            alt="Election Importance"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadershipVision;
