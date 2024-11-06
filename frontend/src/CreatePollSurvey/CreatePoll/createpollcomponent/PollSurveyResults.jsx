import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Share2, ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";

const PollSurveyResults = () => {
  const [pollData, setPollData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { pollId } = useParams(); // Assuming `pollId` is being passed in the URL params
  const navigate = useNavigate();

  const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#fbbf24", "#a78bfa"];

  useEffect(() => {
    const fetchPollData = async () => {
      try {
        const response = await fetch(`/api/polls/${pollId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch poll data");
        }
        const data = await response.json();
        setPollData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPollData();
  }, [pollId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading results...</div>
      </div>
    );
  }

  if (error || !pollData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-500">Error loading poll results</div>
      </div>
    );
  }

  // Calculate total votes
  const totalVotes = pollData.options.reduce(
    (sum, option) => sum + option.votes,
    0
  );

  // Calculate percentages for each option
  const optionsWithPercentages = pollData.options.map((option) => ({
    ...option,
    percentage:
      totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(1) : 0,
  }));

  // Format data for PieChart
  const chartData = optionsWithPercentages.map((option) => ({
    name: option.text,
    value: option.votes,
  }));

  return (
    <div className="p-2 sm:p-4">
      <div className="max-w-3xl mx-auto p-4 mt-4">
        <h1 className="text-lg sm:text-2xl font-bold text-center mb-2 sm:mb-3">
          Poll Results
        </h1>

        <div className="bg-white border rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="font-semibold text-sm sm:text-base mb-1">
            {pollData.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            Total votes: {totalVotes}
          </p>

          <div className="flex flex-col sm:flex-row mb-4">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              {optionsWithPercentages.map((option, index) => (
                <div key={index} className="mb-2">
                  <span
                    className="inline-block w-8 h-4 mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  <span>{option.text}</span>
                  <span className="float-right text-xs sm:text-sm">
                    {option.percentage}% ({option.votes} votes)
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center sm:w-1/2">
              <PieChart width={150} height={150}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>

          <div className="flex justify-around sm:justify-between items-center text-xs sm:text-base">
            <button
              className="flex items-center text-gray-600"
              onClick={() => navigate(`/poll-survey-creator/${pollId}`)} // Adjust the URL to match the desired format
            >
              <ArrowLeft size={14} className="mr-1" /> Back to poll
            </button>
            <button className="flex items-center text-gray-600">
              <Share2 size={14} className="mr-1" /> Share
            </button>
          </div>
        </div>

        {pollData.votes && pollData.votes.length > 0 && (
          <div className="bg-white border rounded-lg shadow-sm mt-4 sm:mt-6 mb-6 sm:mb-8 p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4">
              <span className="mr-2">👥</span> Who voted what?
            </h3>
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-1">Name</th>
                  <th className="text-left pb-1">Vote</th>
                </tr>
              </thead>
              <tbody>
                {pollData.votes.map((vote, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-2 flex items-center">
                      <span className="w-6 h-6 bg-gray-200 rounded-full mr-2"></span>
                      {vote.name || "Anonymous"}
                    </td>
                    <td className="py-2">{vote.selectedOption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <div>
            <h3 className="font-semibold text-sm sm:text-base">
              Create Your Own Poll
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 w-full sm:w-3/4">
              Want to create your own poll? With Political Survey anyone can
              easily create an online poll in seconds.
            </p>
          </div>

          <Link to="/create-a-poll">
            <button className="bg-indigo-600 text-white w-full sm:w-32 px-2 sm:px-1 py-2 sm:py-3 rounded text-xs sm:text-sm mt-2 sm:mt-0">
              Create a poll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PollSurveyResults;
