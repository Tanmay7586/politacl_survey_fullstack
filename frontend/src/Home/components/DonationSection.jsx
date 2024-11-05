import React from "react";
import { motion } from "framer-motion";

const DonationSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-4 md:p-6 lg:p-8 rounded-xl shadow-lg mb-12">
      <div className="text-center mb-6 md:mb-8">

        <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
          Make an Impact with Your Donation
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {/* Left Content Section */}
        <div className="space-y-6 md:space-y-4 lg:pr-8">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-2">
              Strengthen Politary with Your Support
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
              Your support is crucial in strengthening Politary and driving
              positive change. Join us in making a lasting impact by
              contributing your voice, efforts, and donations.
            </p>
          </div>

          <div className="space-y-2">
            {/* Feature Cards */}
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                title: "Clear Vision and Mission",
                description:
                  "We are dedicated to understanding and fulfilling the requirements of the political ecosystem.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                title: "Transparency and Accountability",
                description:
                  "Transparency and accountability are the cornerstones of our commitment to fostering trust.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                title: "Ability to Move Forward",
                description:
                  "Our ability to move forward is driven by adaptability, innovation, and a forward-thinking approach.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-indigo-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 transform transition-all duration-300 hover:shadow-xl">
          <form className="w-full max-w-lg mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Make a Donation
              </h2>
              <p className="text-gray-500 text-sm">
                Support our initiatives and help drive positive change
              </p>
            </div>

            <div className="space-y-4">
              {/* Amount Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₹
                  </span>
                  <input
                    className="w-full pl-8 pr-4 py-3 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    type="number"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    First Name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Last Name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    type="email"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Phone
                  </label>
                  <input
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    type="tel"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              {/* Note Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Note (Optional)
                </label>
                <textarea
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                  rows="4"
                  placeholder="Leave a message..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                  type="submit"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
