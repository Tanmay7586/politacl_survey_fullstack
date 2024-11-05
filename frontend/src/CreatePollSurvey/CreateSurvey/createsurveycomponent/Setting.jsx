import React, { useState } from "react";
import { Settings, ChevronRight } from "lucide-react";

const Setting = () => {
  const [formTitle, setFormTitle] = useState("Political Survey");
  const [formStatus, setFormStatus] = useState("ENABLED");

  const getStatusMessage = (status) => {
    switch (status) {
      case "ENABLED":
        return "Your form is currently visible and able to receive submissions";
      case "DISABLED":
        return "Your form is currently not visible and unable to receive submissions";
      case "DISABLED_DATE":
        return "Your form will be disabled on a specific date";
      case "DISABLED_LIMIT":
        return "Your form will be disabled when it reaches the submission limit";
      case "DISABLED_DATE_OR_LIMIT":
        return "Your form will be disabled on a specific date or when it reaches the submission limit";
      default:
        return "";
    }
  };

  const getStatusColor = (status) => {
    return status === "ENABLED" ? "green" : "yellow";
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-[#DFE9FF] rounded-lg">
      <div className="flex items-center mb-6">
        <div className="bg-orange-500 p-2 rounded-lg mr-3">
          <Settings className="text-white" size={14} />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            FORM SETTINGS
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Customize form status and properties
          </p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-6">
        <div className="mb-6">
          <label
            htmlFor="formTitle"
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Enter a name for your form
          </p>
          <input
            type="text"
            id="formTitle"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="formStatus"
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
          >
            Form Status
          </label>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Enable, disable, or conditionally enable your form
          </p>
          <div className="relative">
            <select
              id="formStatus"
              value={formStatus}
              onChange={(e) => setFormStatus(e.target.value)}
              className="w-full p-2 pr-10 border border-gray-300 rounded-md appearance-none bg-white text-xs sm:text-sm"
            >
              <option value="ENABLED">Enabled</option>
              <option value="DISABLED">Disabled</option>
              <option value="DISABLED_DATE">Disabled on Specific date</option>
              <option value="DISABLED_LIMIT">
                Disabled at submission limit
              </option>
              <option value="DISABLED_DATE_OR_LIMIT">
                Disabled on specific date or at submission limit
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center bg-${getStatusColor(
            formStatus
          )}-100 p-3 rounded-md h-auto sm:h-16`}
        >
          <div
            className={`bg-${getStatusColor(
              formStatus
            )}-500 p-1 rounded-md mr-3`}
          >
            <Settings className="text-white" size={16} />
          </div>
          <div className="flex flex-col">
            <p
              className={`text-xs sm:text-sm text-${getStatusColor(
                formStatus
              )}-800`}
            >
              {formStatus.replace(/_/g, " ")}
            </p>
            <p
              className={`text-xs sm:text-sm text-${getStatusColor(
                formStatus
              )}-600`}
            >
              {getStatusMessage(formStatus)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-xs sm:text-sm">
          Cancel
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md text-xs sm:text-sm">
          Save
        </button>
      </div>
    </div>
  );
};

export default Setting;
