import React from "react";
import narendrbondhekar from "../assets/images/narendrbondhekar.png";
import politicalcarrer from "../assets/images/politicalcarrer.png";
import commitment from "../assets/images/commitment.png";
import legacy from "../assets/images/legacy.png";

const NarendraBondkar = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-justify text-gray-600">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-8">
        Constituency Of Vidarbha
      </h1>

      <section className="bg-white rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              src={narendrbondhekar}
              alt="Narendra Bhondekar"
              className="mx-auto rounded-lg"
            />
            <p className="text-center mt-2 font-semibold">Narendra Bhondekar</p>
            <p className="text-center text-green-600 font-bold">83%</p>
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-lg text-black font-bold mb-4">
              A Strong Politician with Great Vision
            </h2>
            <p className="mb-4">
              Narendra Singh Bhondekar is a prominent politician and dedicated public servant from Bhandara-Gondia. Born on June 20, 1974, in Bhandara, he has risen to become a significant figure in Maharashtra's political landscape. Known for his unwavering commitment to solving the problems of the common man...
            </p>
            <h2 className="font-semibold text-black mb-2">Early Life and Education</h2>
            <p>
              Bhondekar was born into a family with a farming background. His early life was marked by the values of hard work and dedication, which he carried forward into his professional life. He pursued his education in Bhandara, where he developed a keen interest in social activism and public service. His educational background laid a strong foundation for his future endeavors in politics and governance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg p-6 mb-6">
        <h2 className="font-semibold text-black mb-2">First Election (2009)</h2>
        <p>
          In 2009, Bhondekar contested the Maharashtra Legislative Assembly election as an independent candidate from the Bhandara constituency. His victory marked the beginning of his formal political career, driven by his passion to bring about significant developmental changes in the region.
        </p>

        <h2 className="font-semibold text-black mt-4 mb-2">Development Initiatives (2009-2014)</h2>
        <p>
          During his first term, Bhondekar focused on infrastructural development, including road construction, electrification of villages, and improving water supply systems. He initiated several social welfare programs aimed at improving healthcare and education in rural areas.
        </p>

        <h2 className="font-semibold text-black mt-4 mb-2">Re-election (2019)</h2>
        <p>
          Bhondekar was re-elected in 2019, reaffirming the continued trust and support of the people of Bhandara. His second term saw an intensification of his development agenda, particularly in the areas of rural development, agricultural support, and employment generation.
        </p>

        <h3 className="font-semibold text-black mt-4 mb-2">Ongoing Efforts</h3>
        <p>
          Bhondekar continues to work towards his vision of a prosperous Bhandara-Paoni. His ongoing projects include setting up skill development centers, enhancing healthcare facilities, and promoting digital literacy. He remains committed to addressing the needs of his constituents and ensuring that the benefits of development reach every corner of his constituency.
        </p>
      </section>

      <section className="bg-white rounded-lg p-6 mb-6">
        <h3 className="font-bold text-black mb-4">Political Career</h3>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={politicalcarrer}
            alt="Political career"
            className="md:w-1/3 w-full rounded-lg mb-4 md:mb-0 md:mr-4"
          />
          <p className="md:w-2/3 w-full">
            Narendra Bhondekar's political journey began with his election to the Maharashtra Legislative Assembly representing the Bhandara-Gondia Sakoli constituency. His tenure was marked by a focus on grassroots development, addressing local issues, and implementing policies that benefited his constituents. Recognizing his dedication and effectiveness, the people of Bhandara re-elected him in 2019, reaffirming their faith in his leadership.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg p-6 mb-6">
        <h3 className="font-bold text-black mb-4">Commitment to Public Service</h3>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <img
            src={commitment}
            alt="Public service"
            className="md:w-1/3 w-full rounded-lg mb-4 md:mb-0 md:ml-4"
          />
          <p className="md:w-2/3 w-full">
            Throughout his political career, Bhondekar has been a relentless advocate for the common man. He has championed various initiatives aimed at improving the quality of life in his constituency, including infrastructure development, healthcare reforms, and education support. His campaign to promote sustainable farming practices and support rural farmers has been particularly impactful.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg p-6 mb-6">
        <h3 className="font-bold text-black mb-4">Legacy and Impact</h3>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={legacy}
            alt="Legacy and impact"
            className="md:w-1/3 w-full rounded-lg mb-4 md:mb-0 md:mr-4"
          />
          <p className="md:w-2/3 w-full">
            Narendra Bhondekar's legacy is one of dedication, hard work, and an unwavering commitment to the betterment of his community. His efforts have brought significant positive changes to Bhandara, improving the lives of its residents and setting a benchmark for other politicians. As he continues to serve his constituency, his impact is felt not only in Bhandara but across Maharashtra, inspiring future generations of leaders.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NarendraBondkar;
