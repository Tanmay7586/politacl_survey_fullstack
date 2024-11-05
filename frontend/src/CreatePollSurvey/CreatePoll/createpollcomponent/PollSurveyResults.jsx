import { PieChart, Pie, Cell } from "recharts";
import { Share2, ArrowLeft, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const PollSurveyResults = () => {
  const pollData = [
    { name: "Yes", value: 85 },
    { name: "No", value: 15 },
  ];

  const COLORS = ["#4ade80", "#f87171"];

  const voterData = [
    { name: "Mamatha", yes: true, no: false },
    { name: "Chitti", yes: false, no: true },
    { name: "Siva", yes: false, no: true },
  ];

  return (
    <div className="p-2 sm:p-4">
      <div className="max-w-3xl mx-auto p-4 mt-4">
        <h1 className="text-lg sm:text-2xl font-bold text-center mb-2 sm:mb-3">
          Create a Poll & Survey
        </h1>
        <p className="text-center text-gray-600 mb-4 sm:mb-8 text-sm sm:text-base">
          <span className="text-black">Create a Poll and survey</span> to
          accurately gauge public opinion on politics, including topics like
          demographics, party affiliation, key issues, candidate evaluation,
          voting intentions, media habits, and trust in government institutions.
        </p>

        <div className="bg-white border rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="font-semibold text-sm sm:text-base mb-1">
            Raju Karemore is a great Leader
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            by a guest · 25 minutes ago
          </p>

          <div className="flex flex-col sm:flex-row mb-4">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <div className="mb-2">
                <span className="inline-block w-8 h-4 bg-green-400 mr-2"></span>
                <span>Yes</span>
                <span className="float-right text-xs sm:text-sm">
                  85% (20 votes)
                </span>
              </div>
              <div className="mb-2">
                <span className="inline-block w-8 h-4 bg-red-400 mr-2"></span>
                <span>No</span>
                <span className="float-right text-xs sm:text-sm">
                  15% (5 votes)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                Total votes: 25
              </p>
            </div>
            <div className="flex justify-center sm:w-1/2">
              <PieChart width={150} height={150}>
                <Pie
                  data={pollData.options.map((option) => ({
                    name: option.text,
                    value: option.votes,
                  }))}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pollData.options.map((entry, index) => (
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
            <button className="flex items-center text-green-600">
              <ArrowLeft size={14} className="mr-1" /> Live results
            </button>
            <button className="flex items-center text-gray-600">
              <ArrowLeft size={14} className="mr-1" /> Back to poll
            </button>
            <button className="flex items-center text-gray-600">
              <Share2 size={14} className="mr-1" /> Share
            </button>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-sm mt-4 sm:mt-6 mb-6 sm:mb-8 p-4 sm:p-6">
          <h3 className="font-semibold mb-3 sm:mb-4">
            <span className="mr-2">👥</span> Who voted what?
          </h3>
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b ">
                <th className="text-left pb-1">Name</th>
                <th className="text-center pb-1">Yes</th>
                <th className="text-center pb-1">No</th>
              </tr>
            </thead>
            <tbody>
              {voterData.map((voter, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-2 flex items-center">
                    <span className="w-6 h-6 bg-gray-200 rounded-full mr-2"></span>
                    {voter.name}
                  </td>
                  <td className="text-center py-2">
                    {voter.yes && <span className="text-green-500">✓</span>}
                  </td>
                  <td className="text-center py-2">
                    {voter.no && <span className="text-red-500">✓</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white border rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="font-semibold mb-3 sm:mb-4">Comments</h3>
          <div className="bg-blue-50 p-3 sm:p-4 rounded mb-4">
            <p className="text-xs sm:text-sm text-blue-800">
              No comments yet. Be the first to write one!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded px-2 py-2 mb-2 text-xs sm:text-sm"
              />
              <textarea
                className="w-full border rounded px-2 py-2 mb-2 text-xs sm:text-sm"
                rows="3"
              ></textarea>
              <button className="bg-indigo-600 text-white rounded px-2 py-1 text-xs sm:text-sm">
                Add comment
              </button>
            </div>
          </div>
        </div>

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
