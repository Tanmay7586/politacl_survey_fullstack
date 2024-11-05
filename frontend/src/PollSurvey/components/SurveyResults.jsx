import React from "react";
import BuildForm from "./BuildForm";
import { Link } from "react-router-dom"; // Import Link

const SurveyResults = () => {
  return (
    <div>
      <div className="mt-6">
        <h1 className="text-xl font-bold text-center mb-8">Survey results</h1>
        <div className="mb-6">
          <Link to="/create-a-poll">
            <button className="bg-indigo-600 text-white px-4 py-2 font-semibold block mx-auto">
              + Create a Survey
            </button>
          </Link>
        </div>
      </div>
      <BuildForm />
    </div>
  );
};

export default SurveyResults;
