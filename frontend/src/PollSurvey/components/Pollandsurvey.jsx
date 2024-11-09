import React, { useState, useEffect } from "react";
import { ChevronDown, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import greenicon from "../../assets/icons/greenicon.png";
import redicon from "../../assets/icons/redicon.png";

const PollAndSurvey = () => {
  const [activeMenu, setActiveMenu] = useState({ type: "", id: null });
  const [expandedItems, setExpandedItems] = useState({
    poll: null,
    survey: null,
  });
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Fetch polls from the backend
  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/polls");
        const data = await response.json();

        if (response.ok) {
          // Transform the data to match our display format
          const transformedPolls = data.map((poll) => ({
            id: poll._id,
            title: poll.title,
            date: new Date(poll.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            participants: poll.votes ? poll.votes.length : 0, // Use votes length as the total votes count
            icon: poll.votes && poll.votes.length > 0 ? greenicon : redicon,
            options: poll.options,
            settings: poll.settings,
          }));

          console.log("Transformed Polls Data:", transformedPolls); // For debugging
          setPolls(transformedPolls);
        } else {
          setError("Failed to fetch polls");
        }
      } catch (error) {
        console.error("Error fetching polls:", error);
        setError("Failed to fetch polls");
      } finally {
        setLoading(false);
      }
    };

    fetchPolls();
  }, []);

  const toggleMenu = (type, id) => {
    setActiveMenu((prev) =>
      prev.type === type && prev.id === id
        ? { type: "", id: null }
        : { type, id }
    );
  };

  const toggleExpand = (type, id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [type]: prev[type] === id ? null : id,
    }));
  };

  const handleViewClick = (type, id) => {
    const selectedPoll = polls.find((poll) => poll.id === id);

    if (selectedPoll) {
      navigate(`/poll-survey-creator/${selectedPoll.id}`, {
        state: {
          ...selectedPoll,
          isNewPoll: false, // Set to false if it's an existing poll
          pollData: {
            title: selectedPoll.title,
            options: selectedPoll.options,
            settings: selectedPoll.settings,
            _id: selectedPoll.id,
          },
        },
      });
    } else {
      console.error("Poll not found");
    }
  };

  const handleDeletePoll = async (id) => {
    // Add delete functionality if needed
    console.log("Delete poll:", id);
  };

  const renderTable = (items, title, type) => (
    <div className="overflow-x-auto">
      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : error ? (
        <div className="text-center py-4 text-red-600">{error}</div>
      ) : (
        <table className="w-full mb-8 table-auto">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 w-2/3 font-normal">{title}</th>
              <th className="text-center py-2 w-1/6 font-normal">
                Total Votes
              </th>
              <th className="text-right py-2 w-1/6 font-normal">Status</th>
              <th className="py-2 w-1/12"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <tr
                  className="border-t relative cursor-pointer"
                  onClick={() => toggleExpand(type, item.id)}
                >
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-md mr-3">
                        <img
                          src={item.icon}
                          alt="Icon"
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <p
                            className="font-normal truncate"
                            style={{ maxWidth: "calc(100% - 4rem)" }}
                          >
                            {item.title}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    {item.participants} {/* Display total votes here */}
                  </td>
                  <td className="text-right">
                    <div className="flex items-center justify-end">
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">
                        Live
                      </span>
                    </div>
                  </td>
                  <td className="text-right pr-4 relative">
                    <button
                      className="text-gray-500 ml-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu(type, item.id);
                      }}
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>

                    {activeMenu.type === type && activeMenu.id === item.id && (
                      <div className="absolute top-0 right-full mr-4 w-32 bg-white shadow-lg rounded-md z-10">
                        <ul>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Edit
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Share
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleDeletePoll(item.id)}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
                {expandedItems[type] === item.id && (
                  <tr>
                    <td colSpan="4" className="py-4 px-6 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500">Total Votes</p>
                          <p className="text-sm font-semibold">
                            {item.participants}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="text-sm font-semibold">{item.date}</p>
                        </div>
                        <button
                          className="px-2 py-1 bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-colors"
                          onClick={() => handleViewClick(type, item.id)}
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  return (
    <div className="container mx-auto sm:px-0 sm:py-0 px-4 py-8">
      <h1 className="text-center font-semibold text-gray-800 mb-10 sm:text-base lg:text-2xl">
        Check Your Results of <br /> Poll & Survey
      </h1>

      <div className="mb-6">
        <Link to="/create-a-poll">
          <button className="bg-indigo-600 text-white px-4 py-2 font-semibold block mx-auto">
            + Create a Poll
          </button>
        </Link>
      </div>

      {renderTable(polls, "Polls", "poll")}

      <div className="mb-6">
        <Link to="/create-a-survey">
          <button className="bg-indigo-600 text-white px-4 py-2 font-semibold block mx-auto">
            + Create a Survey
          </button>
        </Link>
      </div>

      {renderTable([], "Survey", "survey")}
    </div>
  );
};

export default PollAndSurvey;
