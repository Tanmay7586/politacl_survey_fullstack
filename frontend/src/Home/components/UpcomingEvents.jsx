import React from "react";
import eventsimg from "../../assets/images/events.png";
import { events } from "../data/eventData";
import { Link } from "react-router-dom"; // Import Link

const UpcomingEvents = () => {
  return (
    <div className="mb-20 mt-12">
      <div className="flex flex-col md:flex-row items-start justify-between mb-6">
        <div>
          <div className="bg-indigo-600 w-32 text-[10px] font-semibold text-white text-center py-1 px-2 mb-2">
            EVENTS
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
        </div>
        <p className="text-gray-600 text-sm mb-6 md:mb-0 md:ml-6">
          Lorem ipsum dolor sit amet elit, consectetur adipiscing, sed eiusmod
          tempor sit amet elit dolor sit amet elit.
        </p>
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-lg shadow-md overflow-hidden"
            style={{ height: "120px" }} // Maintain card height
          >
            <img
              src={eventsimg}
              alt={event.title}
              className="w-1/6 h-28 object-cover" // Maintain image size
            />
            <div className="p-4 flex-1">
              <h3 className="text-sm font-medium mb-1">{event.title}</h3>
              <p className="text-gray-600 text-xs mb-2">{event.description}</p>
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
  );
};

export default UpcomingEvents;
