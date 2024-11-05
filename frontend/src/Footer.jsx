import React from "react";
import Logo from "../src/assets/images/Footer1.jpeg"; // This is your main image for the logo
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-100">
      {/* Subscribe Section */}
      <div className="container max-w-7xl  mx-auto ">
        <div className="container  mx-auto px-4 py-12  flex flex-col md:flex-row items-center gap-4">
          <img
            src={Logo}
            alt="Subscribe"
            className="rounded-lg shadow-md w-full md:w-5/12  sm:w-9/12 h-auto"
          />
          {/* Share Your Poll Anywhere Section */}
          <div className="p-6 rounded-lg w-full md:w-7/12 sm:w-10/12">
            <h3 className="text-2xl font-bold mb-4">
              Share Your Polls Anywhere
            </h3>
            <p className="mb-4">
              Get more votes by publishing your poll where your audience can see
              it. Embed your poll in your website, send email invitations, or
              share it on social media with ease.
            </p>
            <Link to="/create-a-poll">
              <button className="bg-orange-500 rounded text-white px-4 py-2 font-medium transition duration-300 hover:bg-orange-600">
                + Create a Poll
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 text-white">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Company</h3>
              <p className="text-sm">
                Create a Poll and survey to accurately gauge public opinion on
                politics, including topics like demographics, party affiliation,
                key issues, candidate evaluation, voting intentions, media
                habits, and trust in government institutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link to="/create-a-survey" className="hover:underline">
                    Poll and Survey
                  </Link>
                </li>
                <li>
                  <Link to="/upcoming-events" className="hover:underline">
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link to="/create-a-poll" className="hover:underline">
                    Create Poll and Survey
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white p-2 rounded-full transition duration-300 hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-indigo-600 w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full transition duration-300 hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-indigo-600 w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full transition duration-300 hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-indigo-600 w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full transition duration-300 hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-indigo-600 w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full transition duration-300 hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-indigo-600 w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-indigo-900 text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} - All Rights Reserved - Designed
          &hearts; by GBJ Buzz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
