import React from "react";
import rajukaremore from "../assets/images/rajukaremore.png";
import definingmoment from "../assets/images/definingmoment.png";
import earlybegining from "../assets/images/earlybegining.png";
import leadership from "../assets/images/leadership.png";
import vision from "../assets/images/vision.png";

const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const StandPoint = ({ title, description }) => (
  <div className="flex p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <CheckIcon />
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-justify">{description}</p>
    </div>
  </div>
);

const TimelineEvent = ({ year, title, description, imageUrl, isLeft }) => (
  <div className="flex items-center justify-center mb-16 relative">
    <div className={`w-full md:w-5/12 ${isLeft ? "text-right pr-8" : "order-2 pl-8"}`}>
      {isLeft ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      ) : (
        <>
          <h3 className="text-xl font-semibold text-blue-950 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 text-justify">{description}</p>
        </>
      )}
    </div>

    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 rounded-full text-white flex items-center justify-center text-sm font-bold z-10">
      {year}
    </div>

    <div className={`w-full md:w-5/12 ${isLeft ? "order-2 pl-8" : "pr-8"}`}>
      {isLeft ? (
        <>
          <h3 className="text-xl font-semibold text-blue-950 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 text-justify">{description}</p>
        </>
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      )}
    </div>
  </div>
);

const Timeline = () => {
  const events = [
    {
      year: 1990,
      title: "Early Beginnings: The Foundation of Political Aspirations",
      description:
        "The foundation of Raju Karemore's political aspirations was laid during his formative years, where he first engaged with grassroots issues and community needs. His early involvement in local activism and advocacy ignited a passion for public service and shaped his vision for change.",
      imageUrl: earlybegining,
    },
    {
      year: 2000,
      title: "Defining Moments: Significant Campaigns and Elections",
      description:
        "Defining Moments: Significant Campaigns and Elections highlights pivotal campaigns and elections that shaped Raju Karemore's political trajectory. Each campaign not only tested his strategic acumen but also underscored his commitment to the issues he championed.",
      imageUrl: definingmoment,
    },
    {
      year: 2010,
      title: "Leadership and Vision: Shaping Policy and Reform",
      description:
        "In his role as a leader, Raju Karemore has been instrumental in shaping policy and driving meaningful reform. His visionary approach to governance has led to the development of innovative strategies that address key societal issues.",
      imageUrl: leadership,
    },
    {
      year: 2024,
      title: "Vision for the Future",
      description:
        "Raju Karemore's vision for the future is centered on fostering innovation and creating sustainable solutions that address pressing global challenges. He aims to build on his past successes by driving positive change and empowering communities through forward-thinking initiatives.",
      imageUrl: vision,
    },
  ];

  return (
    <section className="my-12 relative">
      <h2 className="text-2xl font-semibold text-center mb-3 mt-20">
        Biography of Raju Karemore
      </h2>
      <p className="text-center mb-12 w-2/3 mx-auto text-gray-600">
        Raju Karemore is a visionary leader known for his groundbreaking
        innovations, unwavering perseverance, and impactful contributions to
        both industry and community.
      </p>
      <div className="absolute left-1/2 top-36 bottom-0 w-1 bg-indigo-600 transform -translate-x-1/2"></div>
      <div>
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            year={event.year}
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            isLeft={index % 2 === 0} // Alternates left/right positioning
          />
        ))}
      </div>
    </section>
  );
};

const RajuKaremore = () => {
  const standPoints = [
    {
      title: "Innovation",
      description:
        "Innovation is at the core of Raju Karemore's approach, driving him to explore uncharted territories and develop cutting-edge solutions. His ability to think outside the box has led to the creation of transformative ideas that resonate on a global scale. Raju's commitment to innovation ensures that he remains at the forefront of his industry, continuously bringing fresh perspectives and impactful changes.",
    },
    {
      title: "Perseverance",
      description:
        "Raju Karemore's journey is defined by his unwavering perseverance, facing challenges with resilience and determination. He views obstacles as opportunities for growth, never shying away from difficulties. This steadfast commitment has allowed him to turn setbacks into stepping stones toward success.",
    },
    {
      title: "Leadership",
      description:
        "Raju Karemore exemplifies leadership by steering teams and communities with a clear vision, grounded in integrity and empathy. His approach fosters trust and collaboration, empowering others to reach their full potential. Through his guidance, Raju not only achieves organizational success but also creates a positive and inclusive environment where everyone can thrive.",
    },
    {
      title: "Excellence",
      description:
        "Raju Karemore's pursuit of excellence drives him to uphold the highest standards in every project he undertakes. His meticulous attention to detail and dedication to quality ensure that his work consistently meets and exceeds expectations. This relentless quest for perfection not only defines his achievements but also sets a benchmark for excellence in his field.",
    },
    {
      title: "Inspiration",
      description:
        "Raju Karemore's story is a powerful source of inspiration, encouraging others to chase their dreams with passion and determination. His own achievements serve as a testament to what is possible with hard work and vision. By sharing his journey, Raju motivates individuals to push beyond their limits and strive for greatness in their own lives.",
    },
    {
      title: "Community Impact",
      description:
        "Raju Karemore is deeply committed to community impact, dedicating resources and effort to make a meaningful difference in society. His initiatives focus on empowering underserved communities and fostering social change. Through his philanthropic efforts, Raju not only addresses immediate needs but also contributes to long-term, positive transformations.",
    },
  ];

  return (
    <div>
      <div className="max-w-5xl mx-auto mt-8 p-4 font-sans">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-8">
          Constituency Of Vidarbha
        </h1>

        <div className="p-4 rounded-lg mb-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 text-center mb-4 md:mb-0">
            <h2 className="text-base font-semibold bg-blue-100 py-1">
              Bhandara
            </h2>
            <img
              src={rajukaremore}
              alt="Raju Karemore"
              className="mx-auto w-80 h-60 rounded-lg shadow-lg"
            />
            <div className="flex gap-14 justify-center items-center bg-blue-100 py-1 ">
              <span className="font-semibold mr-2 text-blue-600">
                Raju Karemore
              </span>
              <span className="text-green-500">81%</span>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-6">
            <p className="mb-4 text-justify">
              Raju Karemore's journey is a shining example of how vision,
              perseverance, and innovation can turn dreams into reality.
              Starting from humble beginnings, he faced numerous challenges that
              tested his resolve, yet he remained undeterred. Each obstacle
              became a stepping stone, propelling him closer to his goals.
              Raju's relentless pursuit of excellence pushed him to achieve
              groundbreaking milestones in his field, setting new standards and
              inspiring those around him.
            </p>
            <p className="text-justify">
              His leadership extended beyond personal success; he became a
              beacon of hope, encouraging others to pursue their dreams with the
              same fervor. Raju's story is a testament to the power of
              determination, and his impact will be felt for generations to
              come.
            </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center mb-1 text-blue-950">
          My Stands
        </h2>
        <hr className="w-28 h-1 mx-auto mb-4 bg-blue-500" />
        <div className="grid gap-8 md:grid-cols-2">
          {standPoints.map((point, index) => (
            <StandPoint
              key={index}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        <Timeline />
      </div>
    </div>
  );
};

export default RajuKaremore;
