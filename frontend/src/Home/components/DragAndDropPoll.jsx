import React from "react";
import dragandrop from "../../assets/images/dragandrop.png";
import { Link } from "react-router-dom"; // Import Link

const DragAndDropPoll = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 pt-10 px-4 sm:px-6 lg:px-0">
      <div className="mb-6 md:mb-0">
        <img
          src={dragandrop}
          alt="Drag and drop illustration"
          className="w-full h-auto"
        />
      </div>
      <div className="md:pl-10 lg:pl-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-7">
          Drag a image and <br />
          create a poll
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-10">
          To create a poll, simply drag and drop your image into the designated
          area. Follow the prompts to set up your questions and options. Once
          you are done, publish your poll to gather responses and insights.
        </p>
        <Link to="/create-a-poll">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300">
            Create Your Poll
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DragAndDropPoll;
