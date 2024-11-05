import React from "react";
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
import { ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const PollSurveyResults = () => {
  const pollData = [
    { name: "Narendra", points: 3 },
    { name: "Raju karemore", points: 2 },
    { name: "Rahul Gandhi", points: 1 },
    { name: "Jagan", points: 0 },
  ];

  const voterData = [
    { name: "Mamatha", yes: true, no: false },
    { name: "Chitti", yes: false, no: true },
    { name: "Siva", yes: false, no: true },
  ];

  const colors = ["#4ade80", "#f87171", "#a78bfa", "#fbbf24"];
  return (
    <div>
      <div className="max-w-3xl mx-auto p-4 mt-4">
        <h1 className="text-2xl font-bold text-center mb-3">
          Create a Poll & Survey
        </h1>
        <p className="text-center text-gray-600 mb-8">
          <span className="text-black">Create a Poll and survey </span> to
          accurately gauge public opinion on politics, including topics like
          demographics, party affiliation, key issues, candidate evaluation,
          voting intentions, media habits, and trust in government institutions.
        </p>

        <div className="max-w-3xl mx-auto p-4 mt-4">
          <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
            <h2 className="font-semibold mb-1">Give the priority of winning</h2>
            <p className="text-sm text-gray-500 mb-4">
              by Mamatha · 1 minute ago
            </p>

            <div className="mb-4">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={pollData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="points" fill="#8884d8">
                    {pollData.map((entry, index) => (
                      <Bar
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-sm text-gray-500 mb-4">Total votes: 1</p>

            <div className="flex justify-between items-center">
              <button className="flex items-center text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                <span className="mr-1">●</span> Live results
              </button>
              <button className="flex items-center text-gray-600 text-sm">
                <ArrowLeft size={16} className="mr-1" /> Back to poll
              </button>
              <button className="flex items-center text-gray-600 text-sm">
                <Share2 size={16} className="mr-1" /> Share
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-lg shadow-sm mt-6 mb-4 p-6">
            <h3 className="font-semibold mb-4">
              <span className="mr-2">👥</span> Who voted what?
            </h3>
            <div className="flex justify-end mb-4">
              <select className="border rounded px-2 py-1 text-sm">
                <option>Date</option>
              </select>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Name</th>
                  <th className="text-center pb-2">Yes</th>
                  <th className="text-center pb-2">No</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-sm text-gray-500">
                  <td colSpan="3" className="py-2">
                    2 participants
                  </td>
                </tr>
                {voterData.map((voter, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-2 flex items-center">
                      <span className="w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-500">
                        {voter.name[0]}
                      </span>
                      {voter.name}
                    </td>
                    <td className="text-center py-2">
                      {voter.yes ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="text-center py-2">
                      {voter.no ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold mb-4">Comments</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <p className="text-sm text-blue-800">
              No comments yet. Be the first to write one!
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded px-3 py-2 mb-2"
              />
              <textarea
                className="w-full border rounded px-3 py-2 mb-2"
                rows="3"
              ></textarea>
              <button className="bg-indigo-600 text-white rounded px-2 py-1 text-sm">
                Add comment
              </button>
            </div>
          </div>
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
            {" "}
            <button className="bg-indigo-600 text-white w-32 px-1 py-3 rounded text-xs">
              Create a poll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PollSurveyResults;
