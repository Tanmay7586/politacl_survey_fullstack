import React from "react";
import { Link } from "react-router-dom";
import Head from "./createsurveycomponent/Head";
import OptionsTab from "./createsurveycomponent/OptionsTab";
const Createsurvey = () => {
  return (
    <div>
      <Head />
      <OptionsTab />
    </div>
  );
};

export default Createsurvey;
