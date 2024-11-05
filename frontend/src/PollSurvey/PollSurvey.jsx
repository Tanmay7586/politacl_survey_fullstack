import React from "react";
import { Link } from "react-router-dom";
import PollAndSurvey from "./components/pollandsurvey";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PollSurvey = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px] pt-10">
        <PollAndSurvey />
      </div>
    </div>
  );
};

export default PollSurvey;
