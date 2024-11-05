import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Link } from "react-router-dom"; // Import Link

import narendrbondhekar from "../assets/images/narendrbondhekar.png";
import rajukaremore from "../assets/images/rajukaremore.png";
import maheshyadav from "../assets/images/maheshyadav.jpeg";
import dragandrop from "../assets/images/dragandrop.png";
import eventsimg from "../assets/images/events.png";
import enlisitng from "../assets/images/enlisitng.jpeg";
import economy from "../assets/images/economy.jpeg";
import cleanenv from "../assets/images/cleanenv.jpeg";
import election from "../assets/images/election.png";

const data = [
  { name: "Narehya", Harvesh: 70, RaviKaushik: 30, ManishYadav: 40 },
  { name: "Tapukara", Harvesh: 60, RaviKaushik: 40, ManishYadav: 50 },
  { name: "Kakrala", Harvesh: 80, RaviKaushik: 35, ManishYadav: 45 },
  { name: "Dudu", Harvesh: 70, RaviKaushik: 65, ManishYadav: 60 },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pl-[130px] pr-[130px] pt-[80px]  ">
      <h1 className="text-3xl font-bold text-center mb-7 mt-3">
        Create a Poll & Survey
      </h1>
      <p className="text-center text-gray-600 mb-[80px]">
        Create a Poll and survey to accurately gauge public opinion on politics,
        including topics like demographics, party affiliation,
        <br />
        key issues, candidate evaluation, voting intentions, media habits, and
        trust in government institutions.
      </p>
      {/* Real-time Poll Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 mt-2 ">
        <div className="pr-10">
          <h2 className="text-3xl font-semibold mb-4">
            Get your results in real-time
          </h2>
          <p className="text-gray-600 mb-4">
            The results for each poll are updated in real-time through
            server-to-client push communication. The poll creator can control
            who has access to view live results and who can edit their vote at
            any time.
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
        <div className="bg-gray-100 px-10 py-5 rounded-lg shadow-md">
          <h3 className="text-m font-semibold m-5 pb-5">
            Election result of Bhandara
          </h3>
          <ResponsiveContainer width={400} height={270}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ paddingBottom: "10px", fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="Harvesh" fill="#8884d8" />
              <Bar dataKey="RaviKaushik" fill="#82ca9d" />
              <Bar dataKey="ManishYadav" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Drag and Drop Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 pt-20">
        <div>
          <img
            src={dragandrop}
            alt="Drag and drop illustration"
            className="w-full h-auto"
          />
        </div>
        <div className="pl-20">
          <h2 className="text-3xl font-semibold mb-7">
            Drag a image and <br />
            create a poll
          </h2>
          <p className="text-gray-600 mb-10">
            To create a poll, simply drag and drop your image into the
            designated area. Follow the prompts to set up your questions and
            options. Once you are done, publish your poll to gather responses
            and insights.
          </p>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300">
            Create Your Poll
          </button>
        </div>
      </div>
      {/* Donation Section */}
      <div className="bg-[#DFE9FF] p-8 rounded-lg mb-12">
        <h2 className="text-m text-blue-700 font-bold mb-5">Donation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pr-10">
            <h3 className="text-3xl font-semibold mb-7">
              Strengthen Politary with Your Support
            </h3>
            <p className="text-s font-normal text-gray-600 mb-4">
              Your support is crucial in strengthening Politary and driving
              positive change. Join us in making a lasting impact by
              contributing your voice, efforts, and donations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-10 h-10 text-indigo-600 mr-2"
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
                <div className="pl-4">
                  <h4 className="font-bold text-gray-700">
                    Clear Vision and Mission
                  </h4>
                  <p className="text-sm text-gray-600">
                    We are dedicated to understanding and fulfilling the
                    requirements of the political ecosystem.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-10 h-10 text-indigo-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="pl-4">
                  <h4 className="font-bold text-gray-700">
                    Transparency and Accountability
                  </h4>
                  <p className="text-sm text-gray-600">
                    Transparency and accountability are the cornerstones of our
                    commitment to fostering trust and ensuring responsible
                    actions.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-10 h-10 text-indigo-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="pl-4">
                  <h4 className="font-bold text-gray-700">
                    Ability to Move Forward
                  </h4>
                  <p className="text-s text-gray-600">
                    Our ability to move forward is driven by adaptability,
                    innovation, and a forward-thinking approach.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white flex flex-col items-center p-10 mr-5 sshadow-md">
            <h3 className="text-xl font-semibold mb-3">Make a Donation</h3>
            <p className="text-gray-600 mb-4 text-xs text-center">
              Make a donation to support our political initiatives and help
              drive positive change in our community.
            </p>
            <form className="w-full max-w-lg">
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-1 mt-2"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="amount"
                  type="number"
                  placeholder="Enter donation amount"
                  style={{ fontSize: "0.75rem" }} // xs size
                />
              </div>

              {/* First Name and Last Name */}
              <div className="flex justify-between mb-2">
                <div className="w-1/2 mr-2">
                  <label
                    className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    id="first-name"
                    type="text"
                    placeholder="Enter your first name"
                    style={{ fontSize: "0.75rem" }}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label
                    className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    id="last-name"
                    type="text"
                    placeholder="Enter your last name"
                    style={{ fontSize: "0.75rem" }}
                  />
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="flex justify-between mb-2">
                <div className="w-1/2 mr-2">
                  <label
                    className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    style={{ fontSize: "0.75rem" }}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label
                    className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    style={{ fontSize: "0.75rem" }}
                  />
                </div>
              </div>

              {/* Note */}
              <div className="mb-2">
                <label
                  className="block text-gray-500 text-xs font-semibold mb-1 mt-2"
                  htmlFor="note"
                >
                  Note
                </label>
                <textarea
                  className="appearance-none border border-[#dee2e6] rounded w-full py-2 px-3 bg-[#f0efff] text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="note"
                  placeholder="Leave a note (optional)"
                  rows="4"
                  style={{ fontSize: "0.75rem" }}
                  resize="none" // Prevent resizing
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-4">
                <button className="bg-indigo-600 text-white py-2 px-20 rounded-md hover:bg-indigo-700 transition duration-300">
                  Donate Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="flex justify-between m-auto">
          <div className="flex flex-col justify-between mb-4">
            <div className="bg-indigo-600 text-xs font-semibold text-white text-center py-1 px-3 mb-1 ">
              CONSTITUENCY
            </div>
            <h2 className="text-2xl font-semibold text-grey-900 mb-10">
              Constituency Of Vidarbha{" "}
            </h2>
          </div>
          <p className="text-gray-600 mb-8">
            Here is a comprehensive list of constituencies in Vidarbha
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Link to="/narendra-bondkar">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-black text-center font-semibold text-lg mb-1">
                Bhandara
              </p>
              <img
                src={narendrbondhekar}
                alt="Narendra Bhondikar"
                className="m-auto w-80 h-64 object-cover rounded-lg mb-4"
              />
              <div className="w-3/4 m-auto justify-between flex">
                <h4 className="font-semibold text-indigo-600">
                  Narendra Bhondikar
                </h4>
                <p className="text-green-600 font-bold">83%</p>
              </div>
            </div>
          </Link>
          <Link to="/raju-karemore">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-black text-center font-semibold text-lg mb-1">
                Bhandara
              </p>
              <img
                src={rajukaremore}
                alt="Raju Karemore"
                className="m-auto w-80 h-64 object-cover rounded-lg mb-4"
              />
              <div className="w-3/4 m-auto justify-between flex">
                <h4 className="font-semibold text-indigo-600">Raju Karemore</h4>
                <p className="text-green-600 font-bold">91%</p>
              </div>
            </div>
          </Link>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-black text-center font-semibold text-lg mb-1">
              Pauni
            </p>
            <img
              src={maheshyadav}
              alt="Mahesh Yadav"
              className="m-auto w-80 h-64 object-cover rounded-lg mb-4"
            />
            <div className="w-3/4 m-auto justify-between flex">
              <h4 className="font-semibold text-indigo-600">Mahesh Yadav</h4>
              <p className="text-green-600 font-bold">72%</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt -10 mb-20">
          <button className="bg-indigo-600 text-white py-2 px-20 rounded-md hover:bg-indigo-700 transition duration-300">
            View
          </button>
        </div>

        {/* New Section after Constituencies */}
        <div className="bg-[#DFE9FF] pt-20 pb-20 pl-10  mb-12 items-center flex flex-col">
          <h2 className="text-3xl font-semibold mb-6">
            What do people in Vidarbha want from their Leader?
          </h2>
          <div className="ml-40">
            <ul className="space-y-4 w-9/12 text-base">
              <li>
                <h3 className="font-semibold">
                  Development of Infrastructure:
                </h3>
                <p className="text-gray-600">
                  Improved roads, transportation, and public amenities are
                  needed for the region growth and connectivity.
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
                  Creation of job opportunities and promotion of local
                  industries to boost the regional economy and reduce
                  unemployment.
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
          <h2 className="text-3xl font-bold mb-6 text-grey-900">
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

        <div className="bg-indigo-600 w-40 text-xs font-semibold text-white text-center py-1 px-3 mb-3 mt-20">
          VISION & MISSION
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-10">
            <h2 className="text-3xl text-grey-600 font-bold mb-4">
              Every Person Of Important Of Election In Our Country
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </p>
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300">
              Join Now
            </button>
          </div>
          <div className="w-1/2">
            <img
              src={election}
              alt="Election Importance"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>{" "}
      {/* here */}
      <div className="mb-20 mt-12">
        <div className="flex items-center justify-between">
          <div>
            <div className="bg-indigo-600 w-32 text-[10px] font-semibold text-white text-center py-1 px-2 mb-2">
              EVENTS
            </div>
            <h2 className="text-3xl font-bold mb-4 pr-16 text-gray-900">
              Upcoming Events
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-6 ml-64">
            Lorem ipsum dolor sit amet elit, consectetur adipiscing, sed eiusmod
            tempor sit amet elit dolor sit amet elit.
          </p>
        </div>
        <div className="space-y-4">
          {[
            {
              title:
                "Political to change people poor help fund project in 2024...",
              image: { eventsimg },
              date: "4 July, 2024",
              speaker: "Abdul Hamid",
              location: "Maharashtra",
            },
            {
              title:
                "Be Volunteers to change poor help fund project in 2024...",
              image: { eventsimg },
              date: "4 July, 2024",
              speaker: "Abdul Hamid",
              location: "Maharashtra",
            },
            {
              title:
                "Founder & Campaign to change poor help fund progress in 2024...",
              image: { eventsimg },
              date: "4 July, 2024",
              speaker: "Abdul Hamid",
              location: "Maharashtra",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md overflow-hidden"
              style={{ height: "120px" }} // Reducing card height
            >
              <img
                src={eventsimg}
                alt={event.title}
                className="w-1/6 h-28 object-cover" // Reducing image size
              />
              <div className="p-4 flex-1">
                <h3 className="text-sm font-medium mb-1">{event.title}</h3>
                <p className="text-gray-600 text-xs mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit child
                  & poor.
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Speaker: {event.speaker}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Location: {event.location}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <Link to="/event-details">
                  <button className="bg-indigo-600 text-white text-sm py-1 px-3 rounded-md hover:bg-indigo-700 transition duration-300">
                    JOIN NOW
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
