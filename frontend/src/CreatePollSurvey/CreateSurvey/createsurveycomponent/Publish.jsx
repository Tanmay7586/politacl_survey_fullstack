import { useState } from "react";
import { Link, Mail, Settings } from "lucide-react";

const Publish = () => {
  const [emailInvite, setEmailInvite] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
      {/* Direct Link Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2 space-x-3">
          <div className="bg-green-500 p-2 rounded-lg">
            <Link className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-center md:text-left">
              DIRECT LINK OF YOUR FORM
            </h2>
            <p className="text-sm text-gray-500 text-center md:text-left">
              Your form is securely published and ready to use at this address
            </p>
          </div>
        </div>
      </div>

      {/* Link Copy Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Public Form
            </span>
            <Settings className="text-blue-500" size={20} />
            <span className="text-blue-500 text-sm">Settings</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-lg overflow-hidden border border-gray-300">
          <span className="px-3 text-gray-500 flex items-center">
            <Link size={20} />
          </span>
          <input
            type="text"
            value="https://form.political.survey.com/242571489465468"
            readOnly
            className="flex-grow p-2 text-sm outline-none"
          />
          <div className="flex w-full md:w-auto">
            <button className="bg-green-500 text-white px-4 py-2 text-sm font-medium w-full md:w-auto">
              COPY LINK
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 text-sm font-medium w-full md:w-auto">
              OPEN IN NEW TAB
            </button>
          </div>
        </div>
      </div>

      {/* Email Invite Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center justify-center md:justify-start">
          INVITE BY EMAIL
          <span className="ml-2 bg-gray-200 rounded-full p-1">
            <Mail size={16} />
          </span>
        </h3>
        <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
          <span className="px-3 text-gray-500 flex items-center">
            <Mail size={20} />
          </span>
          <input
            type="email"
            placeholder="Enter email addresses to send invitation with permissions."
            className="flex-grow p-2 text-sm outline-none"
            value={emailInvite}
            onChange={(e) => setEmailInvite(e.target.value)}
          />
        </div>
      </div>

      {/* Share Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-center md:text-left">
          SHARE FORM
        </h3>
        <p className="text-sm text-gray-500 mb-4 text-center md:text-left">
          Share your form link in various social posts and through email.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-blue-600 text-white p-2 rounded">
            <span className="sr-only">Share on Facebook</span>f
          </button>
          <button className="bg-green-500 text-white p-2 rounded">
            <span className="sr-only">Share on WhatsApp</span>W
          </button>
          <button className="bg-blue-700 text-white p-2 rounded">
            <span className="sr-only">Share on LinkedIn</span>in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
