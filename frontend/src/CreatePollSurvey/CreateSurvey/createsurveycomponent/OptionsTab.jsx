import React, { useState } from "react";
import Nav from "./Nav";
import BuildForm from "../../../PollSurvey/components/BuildForm";
import Setting from "./Setting";
import Publish from "./Publish";

const OptionsTab = () => {
  const [selectedTab, setSelectedTab] = useState("Build");

  return (
    <div className="flex flex-col items-center bg-gray-50 mt-4 sm:mt-6 md:mt-10 mx-4 sm:mx-6 md:mx-20 lg:mx-40 mb-10 sm:mb-16 lg:mb-20">
      {/* NavBar */}
      <Nav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Content Area */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-white border border-gray-300 rounded-lg mt-6 sm:mt-10">
        {selectedTab === "Build" && <BuildForm />}
        {selectedTab === "Settings" && <Setting />} {/* Updated here */}
        {selectedTab === "Publish" && <Publish />}
      </div>
    </div>
  );
};

export default OptionsTab;
