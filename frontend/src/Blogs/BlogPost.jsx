import { Link } from "react-router-dom"; // Import Link
import eventsimg from "../assets/images/events.png";
import profileimg from "../assets/images/profileimg.jpeg";

const BlogPost = () => {
  return (
    <div className="max-w-5xl mx-auto p-2">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8 mt-6">
        Blogs
      </h1>

      <div className="bg-white shadow-lg flex flex-col md:flex-row rounded-lg overflow-hidden mb-6">
        <img
          src={eventsimg}
          alt="People in a meeting"
          className="w-full h-84 md:h-84 object-cover" // Adjust height for smaller screens
        />

        <div className="p-4 md:p-6">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <span>4 July, 2024</span>
            <span>2 Comments</span>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            Political to change people poor help fund project in 2024...
          </h2>

          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet accumsan arcu. Proin sed nisl at arcu aliquam tincidunt.
            Vestibulum vehicula, eros a feugiat gravida, lorem nisl consectetur
            elit, sit amet varius quam nisl id libero. Donec vestibulum diam eu
            lorem fringilla, id venenatis lacus venenatis. Nullam varius libero
            sed velit volutpat, non luctus metus molestie.
          </p>

          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet accumsan arcu. Proin sed nisl at arcu aliquam tincidunt.
            Vestibulum vehicula, eros a feugiat gravida, lorem nisl consectetur
            elit, sit amet varius quam nisl id libero. Donec vestibulum diam eu
            lorem fringilla, id venenatis lacus venenatis. Nullam varius libero
            sed velit volutpat, non luctus metus molestie.
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">3 Comments</h3>

          {/* Comment 1 */}
          <div className="flex items-start mb-4">
            <img
              src={profileimg}
              alt="Harshil"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="flex items-center mb-1">
                <h4 className="font-semibold mr-2">Harshil</h4>
                <span className="text-sm text-gray-500">
                  July 5, 2024 | 12:30 PM
                </span>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                eleifend tempor malesuada ut libero et dictum magna aliquet.
              </p>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="flex items-start mb-4">
            <img
              src={profileimg}
              alt="Mansi"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="flex items-center mb-1">
                <h4 className="font-semibold mr-2">Mansi</h4>
                <span className="text-sm text-gray-500">
                  July 6, 2024 | 1:45 PM
                </span>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                eleifend tempor malesuada ut libero et dictum magna aliquet.
              </p>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="flex items-start mb-4">
            <img
              src={profileimg}
              alt="Joe"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="flex items-center mb-1">
                <h4 className="font-semibold mr-2">Joe</h4>
                <span className="text-sm text-gray-500">
                  July 7, 2024 | 3:15 PM
                </span>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                eleifend tempor malesuada ut libero et dictum magna aliquet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Leave A Comment</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name*"
                className="p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="p-2 border rounded"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded mb-4"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Post A Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
