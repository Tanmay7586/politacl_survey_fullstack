import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Share2,
  Copy,
  Mail,
  MessageCircle,
  BarChart2,
  Twitter,
  Facebook,
  Link2,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const PollComponent = () => {
  const [options, setOptions] = useState([
    { id: "option1", content: "Narendra", votes: 3 },
    { id: "option2", content: "Raju Karemore", votes: 2 },
    { id: "option3", content: "Rahul Gandhi", votes: 1 },
    { id: "option4", content: "Jagan", votes: 0 },
  ]);

  const [isCopied, setIsCopied] = useState(false);
  const shareUrl = "https://PoliticalSurvey.com/BDyNz98EyR";

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(options);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setOptions(items);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-2xl font-bold text-center mb-7">Create a Poll & Survey</h1>
      <p className="text-center text-gray-600 mb-20">
        <span className="text-black">Create a Poll and survey </span> to accurately gauge public opinion on politics, including topics like demographics, party affiliation, key issues, candidate evaluation, voting intentions, media habits, and trust in government institutions.
      </p>

      <div className="border rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Give the priority of winning</h3>
        <p className="text-xs text-gray-500 mb-4">by Merinatha - 54 seconds ago</p>
        <p className="text-sm mb-4">Drag your preferred option to the top.</p>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="options">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-2"
              >
                {options.map((option, index) => (
                  <Draggable key={option.id} draggableId={option.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex justify-between items-center bg-gray-100 p-2 rounded"
                      >
                        <span>{option.content}</span>
                        <span className="text-gray-500">{option.votes}</span>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center mb-2 md:mb-0">
            Vote <span className="ml-1">→</span>
          </button>
          <div className="flex items-center space-x-4">
            <Link to="/rankingpollresult">
              <button className="text-gray-600 flex items-center">
                <BarChart2 size={18} className="mr-1" /> Show results
              </button>
            </Link>
            <button className="text-gray-600">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Integrated Share Component */}
      <div className="border-t border-gray-200 mt-8 pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500">
            <Share2 className="w-5 h-5 mr-2" />
            <span>Share</span>
          </div>
          <span className="text-xs text-gray-400">Only visible to you</span>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Share the link</p>
          <div className="flex items-center bg-gray-100 rounded-md p-2 mb-4">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="bg-transparent flex-grow text-sm"
            />
            <button
              onClick={handleCopy}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              {isCopied ? "Copied!" : <Copy className="w-5 h-5" />}
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <Mail className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Twitter className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Facebook className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Link2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg shadow-sm p-6 mb-8 mt-8">
        <h3 className="font-semibold mb-4">Comments</h3>
        <div className="bg-blue-50 p-4 rounded mb-4">
          <p className="text-sm text-blue-800">No comments yet. Be the first to write one!</p>
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

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="font-semibold">Create Your Own Poll</h3>
          <p className="text-sm text-gray-600 w-3/4">
            Want to create your own poll? With Political Survey anyone can easily create an online poll in seconds.
          </p>
        </div>
        <button className="bg-indigo-600 text-white w-full md:w-32 px-1 py-3 rounded text-xs">
          Create a poll
        </button>
      </div>
    </div>
  );
};

export default PollComponent;
