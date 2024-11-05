import React from "react";

const Head = () => {
  return (
    <div className="flex flex-col items-center bg-white py-8 px-4 sm:px-6 md:px-8 lg:px-16">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
        Create a Poll & Survey
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">
        Create a Poll and survey to accurately gauge public opinion on politics,
        including topics like demographics, party affiliation,
        <br className="hidden md:block" /> key issues, candidate evaluation,
        voting intentions, media habits, and trust in government institutions.
      </p>
      <button className="bg-indigo-600 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-indigo-700 transition duration-200">
        Create a Survey
      </button>
    </div>
  );
};

export default Head;
