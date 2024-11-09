import React, { useState } from "react";
import { PlusCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormCreation = () => {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [settings, setSettings] = useState({
    requireNames: false,
    allowComments: false,
    closeOnSchedule: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleDeleteOption = (index) => {
    if (options.length > 2) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSettingChange = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  const handleCreatePoll = async () => {
    try {
      // Validate inputs
      if (!title.trim()) {
        setError("Title is required");
        return;
      }

      const validOptions = options.filter((opt) => opt.trim() !== "");
      if (validOptions.length < 2) {
        setError("At least two options are required");
        return;
      }

      const pollData = {
        title,
        pollType: "Multiple choice",
        options: options.filter((opt) => opt.trim()).map((text) => ({ text })),
        settings,
        createdAt: new Date(),
      };

      const response = await fetch("http://localhost:5000/api/polls/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pollData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Poll created successfully:", data);
        // Navigate to poll details page with the created poll data
        navigate(`/poll-survey-creator/${data._id}`, {
          state: {
            ...data,
            isNewPoll: true, // Flag to indicate this is a newly created poll
            pollData: {
              title: data.title,
              options: data.options,
              settings: data.settings,
              _id: data._id,
            },
          },
        });
      } else {
        setError(data.error || "Failed to create poll");
      }
    } catch (error) {
      console.error("Error creating poll:", error);
      setError("Failed to create poll. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl p-6 bg-white rounded-lg mx-auto -mt-8 border border-blue-500">
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Type your question here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <button className="text-blue-600 flex items-center mb-4">
        <PlusCircle size={20} className="mr-1" /> Add description or image
      </button>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Poll type
        </label>
        <div className="p-2 border border-gray-300 rounded-md bg-gray-100 text-left">
          Multiple choice
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Answer Options
        </label>
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            {options.length > 2 && (
              <button
                onClick={() => handleDeleteOption(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={20} />
              </button>
            )}
          </div>
        ))}
        <button
          onClick={handleAddOption}
          className="text-blue-600 flex items-center mr-4"
        >
          <PlusCircle size={20} className="mr-1" /> Add option
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Settings</h3>
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-700">
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </span>
            <button
              onClick={() => handleSettingChange(key)}
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                value ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
                  value ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleCreatePoll}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
      >
        Create poll
      </button>
    </div>
  );
};

export default FormCreation;
