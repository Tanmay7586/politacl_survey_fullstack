import React from "react";
import ChartComponent from "./ChartComponent";
import { data } from "../data/pollData";
import { Link } from "react-router-dom"; // Import Link


const RealTimePollResults = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 mt-2 px-4 sm:px-6 lg:px-0">
      {/* Text Section */}
      <div className="md:pr-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Get your results in real-time
        </h2>
        <p className="text-gray-600 mb-4">
          The results for each poll are updated in real-time through
          server-to-client push communication. The poll creator can control who
          has access to view live results and who can edit their vote at any
          time.
        </p>
        <p className="text-gray-600 mb-12">
          As soon as a poll has been completed, the results can be exported in
          pdf format if required.
        </p>
        <Link to="/create-a-poll">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300">
            Create Your Poll
          </button>
        </Link>
      </div>

      {/* Chart Section */}
      <div className="bg-gray-100 px-6 py-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-5">
          Election result of Bhandara
        </h3>
        <ChartComponent data={data} />
      </div>
    </div>
  );
};

export default RealTimePollResults;
