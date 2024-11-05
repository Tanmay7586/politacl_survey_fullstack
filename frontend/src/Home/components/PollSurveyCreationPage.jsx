import React from 'react';
import RealTimePollResults from './RealTimePollResults';
import DragAndDropPoll from './DragAndDropPoll';
import DonationSection from './DonationSection';
import ConstituencySection from './ConstituencySection';
import LeadershipVision from './LeadershipVision';
import UpcomingEvents from './UpcomingEvents';

const PollSurveyCreationPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[130px] pt-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-5 sm:mb-7 mt-3">
        Create a Poll & Survey
      </h1>
      <p className="text-center text-gray-600 mb-10 sm:mb-[80px] text-sm sm:text-base">
        Create a Poll and survey to accurately gauge public opinion on politics,
        including topics like demographics, party affiliation,
        <br className="hidden sm:block" />
        key issues, candidate evaluation, voting intentions, media habits, and
        trust in government institutions.
      </p>

      <RealTimePollResults />
      <DragAndDropPoll />
      <DonationSection />
      <ConstituencySection />
      <LeadershipVision />
      <UpcomingEvents />
    </div>
  );
};

export default PollSurveyCreationPage;
