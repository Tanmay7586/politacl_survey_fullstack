import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import eventsimg from "../assets/images/events.png";

// EventCard component to display individual event details
const EventCard = ({
  title,
  description,
  date,
  speaker,
  location,
  imageUrl,
}) => (
  <div
    className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-4"
    style={{ maxWidth: "900px", height: "auto", minHeight: "160px" }}
  >
    {/* Adjusted image width and height */}
    <img
      src={imageUrl}
      alt={title}
      className="w-full md:w-1/6 h-28 object-cover"
    />
    <div className="p-3 flex-grow">
      {/* Semi-bold title with reduced font size */}
      <h3 className="font-semibold text-lg md:text-base mb-1">{title}</h3>
      {/* Reduced font size for description */}
      <p className="text-gray-600 text-sm mb-1">{description}</p>
      {/* Flex container for date, speaker, and location */}
      <div className="flex flex-col md:flex-row md:space-x-3 text-xs text-gray-500 mb-1">
        <div className="flex items-center mb-1 md:mb-0">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {date}
        </div>
        <div className="flex items-center mb-1 md:mb-0">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Speaker: {speaker}
        </div>
        <div className="flex items-center">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Location: {location}
        </div>
      </div>
    </div>
    <div className="flex items-center p-3">
      <Link to="/event-details">
        {/* Link to the desired page */}
        <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition duration-300">
          Join Now
        </button>
      </Link>
    </div>
  </div>
);

// UpcomingEventsPage component to display a list of events
const UpcomingEventsPage = () => {
  const events = [
    {
      title: "Political to change people your help fund project in 2024...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      date: "15 July, 2024",
      speaker: "Abdul Hamid",
      location: "Maharashtra",
      imageUrl: `${eventsimg}`,
    },
    {
      title: "Be Volunteers to change your help fund project in 2024...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      date: "4 July, 2024",
      speaker: "Abdul Hamid",
      location: "Maharashtra",
      imageUrl: `${eventsimg}`,
    },
    {
      title: "Founder & Campaign to change your help fund progress in 2024...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      date: "10 July, 2024",
      speaker: "Abdul Hamid",
      location: "Maharashtra",
      imageUrl: `${eventsimg}`,
    },
    {
      title: "Technology and Innovation for a Better Tomorrow",
      description:
        "Join us for a discussion on the impact of technology in our lives.",
      date: "20 July, 2024",
      speaker: "Dr. Sneha Rao",
      location: "Delhi",
      imageUrl: `${eventsimg}`,
    },
    {
      title: "Community Health and Wellness Fair",
      description:
        "A fair focusing on community health resources and wellness.",
      date: "25 July, 2024",
      speaker: "Nina Patel",
      location: "Mumbai",
      imageUrl: `${eventsimg}`,
    },
    {
      title: "Leadership Skills for Future Leaders",
      description:
        "Workshop aimed at empowering the next generation of leaders.",
      date: "30 July, 2024",
      speaker: "Rajesh Verma",
      location: "Pune",
      imageUrl: `${eventsimg}`,
    },
    // Add more events as needed
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* New Block with Text "Events" shifted to the left and adjusted size */}
        <div className="bg-indigo-600 w-32 text-xs font-semibold text-white text-center py-1 px-2 mb-2">
          EVENTS
        </div>

        <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
          <h2 className="text-3xl font-medium text-gray-700 mb-2 md:mb-0">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi.
          </p>
        </div>
        <div className="pb-40">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsPage;
