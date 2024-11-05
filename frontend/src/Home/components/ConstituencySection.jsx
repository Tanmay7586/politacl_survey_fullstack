import React from "react";
import { Link } from "react-router-dom";
import narendrbondhekar from "../../assets/images/narendrbondhekar.png";
import rajukaremore from "../../assets/images/rajukaremore.png";
import maheshyadav from "../../assets/images/maheshyadav.jpeg";
import economy from "../../assets/images/economy.jpeg";
import enlisitng from "../../assets/images/enlisitng.jpeg";
import cleanenv from "../../assets/images/cleanenv.jpeg";
import election from "../../assets/images/election.png";

const ConstituencySection = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between m-auto mb-8">
        <div className="flex flex-col mb-4">
          <div className="bg-indigo-600 text-xs font-semibold text-white text-center py-1 px-3 mb-1">
            CONSTITUENCY
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Constituency Of Vidarbha
          </h2>
        </div>
        <p className="text-gray-600 mb-8">
          Here is a comprehensive list of constituencies in Vidarbha
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Link
          to="/narendra-bondkar"
          className="bg-blue-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
        >
          <p className="text-black text-center font-semibold text-lg mb-1">
            Bhandara
          </p>
          <img
            src={narendrbondhekar}
            alt="Narendra Bhondikar"
            className="m-auto w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-3/4 m-auto">
            <h4 className="font-semibold text-indigo-600">
              Narendra Bhondikar
            </h4>
            <p className="text-green-600 font-bold">83%</p>
          </div>
        </Link>

        <Link
          to="/raju-karemore"
          className="bg-blue-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
        >
          <p className="text-black text-center font-semibold text-lg mb-1">
            Bhandara
          </p>
          <img
            src={rajukaremore}
            alt="Raju Karemore"
            className="m-auto w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-3/4 m-auto">
            <h4 className="font-semibold text-indigo-600">Raju Karemore</h4>
            <p className="text-green-600 font-bold">91%</p>
          </div>
        </Link>

        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <p className="text-black text-center font-semibold text-lg mb-1">
            Pauni
          </p>
          <img
            src={maheshyadav}
            alt="Mahesh Yadav"
            className="m-auto w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-3/4 m-auto">
            <h4 className="font-semibold text-indigo-600">Mahesh Yadav</h4>
            <p className="text-green-600 font-bold">72%</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-20">
        <button className="bg-indigo-600 text-white py-2 px-8 rounded-md hover:bg-indigo-700 transition duration-300">
          View
        </button>
      </div>

      {/* New Section after Constituencies */}
      <div className="bg-[#DFE9FF] pt-20 pb-20 pl-10 mb-12 items-center flex flex-col">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          What do people in Vidarbha want from their Leader?
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 text-base">
            <li>
              <h3 className="font-semibold">Development of Infrastructure:</h3>
              <p className="text-gray-600">
                Improved roads, transportation, and public amenities are needed
                for the region's growth and connectivity.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Agricultural Support:</h3>
              <p className="text-gray-600">
                Effective support for farmers, including better irrigation
                facilities, fair prices for produce, and modernization of
                agricultural practices.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Economic Opportunities:</h3>
              <p className="text-gray-600">
                Creation of job opportunities and promotion of local industries
                to boost the regional economy and reduce unemployment.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Healthcare and Education:</h3>
              <p className="text-gray-600">
                Improved healthcare facilities and quality education are
                essential for the overall development of the region.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Effective Governance:</h3>
              <p className="text-gray-600">
                Transparent, accountable, and efficient governance that
                addresses local issues and ensures that resources are used
                effectively for the benefit of the people.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-600 w-40 text-xs font-semibold text-white text-center py-1 px-3 mb-1">
        POLICY POSITION
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Leader For Youth <br />
          Generation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg text-indigo-600 shadow-md">
            <img
              src={economy}
              alt="Growing Your Economy"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold mb-2">Growing Your Economy</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg text-indigo-600 shadow-md">
            <img
              src={enlisitng}
              alt="Enlisting Student"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold mb-2">Enlisting Student</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg text-indigo-600 shadow-md">
            <img
              src={cleanenv}
              alt="Clean Environment"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold mb-2">Clean Environment</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstituencySection;
