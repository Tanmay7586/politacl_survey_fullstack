import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  PlusCircle,
  Share2,
  BarChart2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const PollSurveyCreator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const pollId = params.pollId;

  const [pollData, setPollData] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    if (location.state) {
      setPollData(location.state);
    } else {
      if (pollId) {
        fetch(`import.meta.env.VITE_API_URL+/api/polls/${pollId}`)
          .then((response) => response.json())
          .then((data) => setPollData(data))
          .catch((error) => console.error("Error fetching poll data:", error));
      }
    }
  }, [location, pollId]);

  if (!pollData.title) {
    return <div>Error: No poll data found.</div>;
  }

  const handleVote = () => {
    if (!selectedOption) {
      alert("Please select an option to vote!");
      return;
    }

    fetch(`/api/polls/${pollId}/vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedOption, name, comment }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to cast vote");
        }
      })
      .then((data) => {
        console.log("Vote submitted:", data);
        alert("Vote submitted successfully!"); // Display success message
      })
      .catch((error) => {
        console.error("Error casting vote:", error);
        alert("Error submitting your vote");
      });
  };

  const handleCommentSubmission = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("Please enter a comment");
      return;
    }

    // Add comment to the list (simulating a post request)
    const newComment = { name, comment };
    setCommentList([...commentList, newComment]);
    setComment(""); // Clear the comment field after submission
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-32 pt-10">
        <h1 className="text-3xl sm:text-2xl font-bold text-center mb-7">
          Create a Poll & Survey
        </h1>
        <p className="text-center text-gray-600 px-2">
          <span className="text-black">Create a Poll and survey </span> to
          accurately gauge public opinion on politics, including topics like
          demographics, party affiliation, key issues, candidate evaluation,
          voting intentions, media habits, and trust in government institutions.
        </p>
      </div>
      <div className="max-w-full px-4 sm:px-8 lg:px-40">
        <div className="pt-10 pb-10">
          <div className="bg-white rounded-lg border border-blue-700 shadow-sm p-6 mx-auto my-8 max-w-3xl">
            <h1 className="text-2xl font-bold mb-2">{pollData.title}</h1>
            <p className="text-sm text-gray-500 mb-3">
              Select one of the following options:
            </p>
            <div className="space-y-2 mb-8">
              {pollData.options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="option"
                    value={option.text}
                    checked={selectedOption === option.text}
                    onChange={() => setSelectedOption(option.text)}
                  />
                  <label htmlFor={`option-${index}`} className="ml-2">
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-1 mt-2"
                htmlFor="name"
              >
                Name (Optional)
              </label>
              <input
                className="appearance-none border border-[#dee2e6] rounded w-full mb-5 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center">
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center mr-4 mb-2 sm:mb-0"
                onClick={handleVote}
              >
                Vote <span className="ml-1">→</span>
              </button>
              <div className="flex items-center space-x-4 mr-4">
                <Link to={`/show-result/${pollId}`}>
                  <button className="text-gray-600 flex items-center">
                    <BarChart2 size={18} className="mr-1" /> Show results
                  </button>
                </Link>
              </div>
              <button className="text-gray-600">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Share section */}
          <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Share</h3>
              <span className="text-sm text-gray-500">Only visible to you</span>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-2">Share the link</p>
              <div className="flex items-center">
                <input
                  type="text"
                  value={`https://your-domain.com/poll-survey-creator/${pollId}`}
                  className="flex-grow border rounded-l px-3 py-2 text-sm"
                  readOnly
                />
                <button className="bg-gray-100 border border-l-0 rounded-r px-3 py-2">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <Mail size={20} />
              <MessageCircle size={20} />
              {/* Add other share icons here */}
            </div>
          </div>

          {/* Comments section */}
          <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
            <h3 className="font-semibold mb-4">Comments</h3>
            {commentList.length === 0 ? (
              <div className="bg-blue-50 p-4 rounded mb-4">
                <p className="text-sm text-blue-800">
                  No comments yet. Be the first to write one!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {commentList.map((comment, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded">
                    <p className="text-sm font-semibold">{comment.name}</p>
                    <p className="text-sm text-gray-600">{comment.comment}</p>
                  </div>
                ))}
              </div>
            )}
            <form
              onSubmit={handleCommentSubmission}
              className="flex items-start space-x-4"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded px-3 py-2 mb-2"
                />
                <textarea
                  placeholder="Enter your comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border rounded px-3 py-2 mb-2"
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white rounded px-2 py-1 text-sm"
                >
                  Add comment
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Create Your Own Poll</h3>
              <p className="text-sm text-gray-600 w-3/4">
                Want to create your own poll? With Political Survey anyone can
                easily create an online poll in seconds.
              </p>
            </div>

            <Link to="/create-a-poll">
              <button className="bg-indigo-600 text-white w-32 px-1 py-3 rounded text-xs">
                Create a poll
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollSurveyCreator;
