import React from "react";
import FormCreation from "./createpollcomponent/FormCreation";

const CreatePoll = () => {
  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-32  pt-10">
        <h1 className="text-3xl sm:text-2xl font-bold text-center mb-7">
          Create a Poll & Survey
        </h1>
        <p className="text-center text-gray-600 mb-20 px-2">
          <span className="text-black">Create a Poll and survey </span> to
          accurately gauge public opinion on politics, including topics like
          demographics, party affiliation, key issues, candidate evaluation,
          voting intentions, media habits, and trust in government institutions.
        </p>
      </div>
      <FormCreation />
    </div>
  );
};

export default CreatePoll;
