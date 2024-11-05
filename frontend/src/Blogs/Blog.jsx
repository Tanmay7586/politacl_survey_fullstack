import React from "react";
import eventsimg from "../assets/images/events.png";
import travel from "../assets/images/travel.png";
import { Link } from "react-router-dom"; // Import Link

const BlogPost = ({ date, comments, title, description, image }) => (
  <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        <span>{date}</span>
        <span className="mx-2">•</span>
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          ></path>
        </svg>
        <span>{comments} Comments</span>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to="/blog-post">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
          Continue
        </button>
      </Link>
    </div>
  </div>
);

const Blog = () => {
  const posts = [
    {
      date: "4 July, 2024",
      comments: 2,
      title: "Political to change people poor help fund project in 2024...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit child & poor.",
      image: `${eventsimg}`,
    },
    {
      date: "4 July, 2024",
      comments: 2,
      title: "Be Volunteers to change poor help fund project in 2024...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit child & poor.",
      image: `${eventsimg}`,
    },
    {
      date: "4 July, 2024",
      comments: 2,
      title: "Founder & Campaign to change poor help fund progress in 2024...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit child & poor.",
      image: `${eventsimg}`,
    },
  ];

  const recentNews = [
    {
      date: "02 Jun, 2024",
      title: "Free higher education for girls Benefit of the plan from the next year (2024-25)",
      image: `${travel}`,
    },
    {
      date: "07 Jun, 2024",
      title: "Get ready to travel to metro...",
      image: `${travel}`,
    },
    {
      date: "30-06-2024",
      title: "Reviewing the construction of a 100 bed government sub-d...",
      image: `${travel}`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Recent News</h3>
            <div className="space-y-4">
              {recentNews.map((news, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm text-gray-500">{news.date}</p>
                    <h4 className="text-sm font-medium">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Activities
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Education
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Jobs
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Agriculture
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Development
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our News!</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your E-mail"
                className="flex-grow border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
