import React from 'react';
import myImage from '../assets/images/milna.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import newImage from '../assets/images/hhehehe.jpeg';
import speakerImage from '../assets/images/amdar.jpeg';
import agendaImage1 from '../assets/images/image1.jpeg';
import agendaImage2 from '../assets/images/image2.jpeg';
import agendaImage3 from '../assets/images/image3.jpeg';
import agendaImage4 from '../assets/images/image4.jpeg';

const Webpage = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="flex flex-col md:flex-row items-start mt-10 gap-8">
        <img 
          src={myImage} 
          alt="Description of the image" 
          className="w-full md:w-1/2 lg:w-[600px] h-auto object-cover rounded-lg" 
        />
        <div className="w-full md:w-1/2 lg:w-[600px] flex flex-col items-start">
          <h3 className="text-xl font-bold mb-1 text-indigo-600">
            Related Event
          </h3>
          <div className="h-0.5 bg-red-500 w-4/5 mb-6" />
          
          {[0, 1].map((_, index) => (
            <div key={index} className="flex items-center mt-4 w-full">
              <div className="bg-indigo-600 p-2.5 h-20 w-20 flex flex-col items-center justify-center rounded-lg text-white shrink-0">
                <h2 className="text-3xl font-bold">15</h2>
                <span className="text-xl font-bold">Jan</span>
              </div>
              <div className="ml-5 flex-grow">
                <p className="text-sm text-gray-800 font-bold">
                  Nobody can predict the future. You just have to give it a try.
                </p>
                <div className="flex items-center mt-2.5">
                  <FontAwesomeIcon icon={faUser} className="text-base text-indigo-600 mr-1" />
                  <span className="font-bold text-sm text-gray-800">Speaker</span>
                  <span className="text-sm text-gray-800"> - Sameer Agam</span>
                </div>
                <div className="flex items-center mt-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-base text-indigo-600 mr-1" />
                  <span className="font-bold text-sm text-gray-800">Location</span>
                  <span className="text-sm text-gray-800"> - Panvel</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap justify-start mt-8 gap-8">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="text-2xl text-indigo-600 mr-1" />
          <span className="text-base text-gray-800">10:00 AM</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-2xl text-indigo-600 mr-1" />
          <span className="text-base text-gray-800">Sameer Agam</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-indigo-600 mr-1" />
          <span className="text-base text-gray-800">Panvel</span>
        </div>
      </div>

      <h4 className="mt-8 text-lg text-gray-800 font-bold">
        Political to change people's poor help fund project in 2024...
      </h4>

      <p className="mt-4 text-sm text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Proin sed nisl at arcu aliquam tincidunt. Vestibulum vehicula, eros a feugiat gravida, lorem nisl consectetur elit, sit amet varius quam nisi id libero. Donec vestibulum diam eu lorem fringilla, id vehicula lacus venenatis. Nullam varius libero sed velit volutpat, non iaculis metus malesuada.
      </p>

      <img 
        src={newImage} 
        alt="Description of the new image" 
        className="w-full h-auto mt-8 object-cover rounded-lg" 
      />

      <h3 className="mt-10 text-xl font-bold">
        Know More about the Speaker
      </h3>

      <div className="flex flex-col md:flex-row items-start mt-5 gap-8">
        <img 
          src={speakerImage} 
          alt="Speaker" 
          className="w-full md:w-64 h-auto rounded-lg object-cover" 
        />
        <div className="flex flex-col justify-start">
          <h4 className="text-lg font-bold text-gray-800">
            Speaker Name
          </h4>
          <p className="text-sm text-gray-800 mt-2">
            Brief description about the speaker. This could include their background, expertise, and what they will discuss at the event.
          </p>
        </div>
      </div>

      <h3 className="mt-10 text-xl font-bold">
        Agenda and Schedule
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        {[
          { img: agendaImage1, time: '10:00 AM', title: 'Opening Remarks' },
          { img: agendaImage2, time: '10:30 AM', title: 'Keynote Address' },
          { img: agendaImage3, time: '11:00 AM', title: 'Panel Discussion' },
          { img: agendaImage4, time: '12:00 PM', title: 'Networking Session' }
        ].map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
            <img 
              src={item.img} 
              alt={`Agenda Item ${index + 1}`} 
              className="w-2/3 h-30 object-cover rounded-lg mb-4" 
            />
            <h4 className="font-bold text-lg">{item.time}</h4>
            <p className="text-sm text-gray-800 mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webpage;