import React, { useState } from "react";
import { PlusCircle, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormCreation = () => {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [pollType, setPollType] = useState("Multiple choice");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [settings, setSettings] = useState({
    requireNames: false,
    allowComments: false,
    closeOnSchedule: false,
  });
  const navigate = useNavigate();

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handlePollTypeChange = (type) => {
    setPollType(type);
  };

  const handleDeleteOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
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
    const pollData = {
      title,
      pollType,
      options: options.map((optionText) => ({ text: optionText })), // Convert each option to an object with text
      settings,
    };

    try {
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
        if (pollType === "Multiple choice") {
          navigate(`/poll-survey-creator/${data._id}`, { state: data });
        } else if (pollType === "Ranking poll") {
          navigate(`/poll-survey-creator/rankingpoll/${data._id}`, {
            state: data,
          });
        }
      } else {
        console.error("Failed to create poll:", data.error);
      }
    } catch (error) {
      console.error("Error creating poll:", error);
    }
  };

  return (
    <div className="max-w-2xl p-6 bg-white rounded-lg mx-auto -mt-8 border border-blue-500">
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
        <div className="relative">
          <button
            className="w-full p-2 border border-gray-300 rounded-md bg-white text-left flex items-center justify-between"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{pollType}</span>
            <ChevronDown size={20} />
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
              <button
                className="w-full p-2 text-left hover:bg-gray-100"
                onClick={() => {
                  setPollType("Multiple choice");
                  setIsDropdownOpen(false);
                  handlePollTypeChange("Multiple choice");
                }}
              >
                Multiple choice
              </button>
              <button
                className="w-full p-2 text-left hover:bg-gray-100"
                onClick={() => {
                  setPollType("Ranking poll");
                  setIsDropdownOpen(false);
                  handlePollTypeChange("Ranking poll");
                }}
              >
                Ranking poll
              </button>
            </div>
          )}
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
            <button
              onClick={() => handleDeleteOption(index)}
              className="text-gray-400 hover:text-red-500"
            >
              <X size={20} />
            </button>
          </div>
        ))}
        <div className="flex items-center">
          <button
            onClick={handleAddOption}
            className="text-blue-600 flex items-center mr-4"
          >
            <PlusCircle size={20} className="mr-1" /> Add option
          </button>
          <span className="text-gray-400">or</span>
          <button className="text-blue-600 ml-4">Add "Other"</button>
        </div>
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
