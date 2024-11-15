import React from "react";

const LikertQuestion = ({ question, name }) => (
  <tr>
    <td className="border border-gray-300 p-2 text-sm">{question}</td>
    {[...Array(5)].map((_, i) => (
      <td key={i} className="border border-gray-300 text-center">
        <input type="radio" name={name} className="mr-2" />
      </td>
    ))}
  </tr>
);

const RadioGroup = ({ name, options, layout = "vertical" }) => (
  <div
    className={`flex ${
      layout === "horizontal" ? "space-x-6" : "flex-col space-y-2"
    }`}
  >
    {options.map((option) => (
      <div key={option} className="flex items-center">
        <input
          type="radio"
          id={`${name}-${option.toLowerCase().replace(/\s+/g, "-")}`}
          name={name}
          className="mr-2"
        />
        <label
          htmlFor={`${name}-${option.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-gray-700 text-sm"
        >
          {option}
        </label>
      </div>
    ))}
  </div>
);

const CheckboxGroup = ({ options, maxSelect, columns = 1 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
    {options.map((option) => (
      <div key={option} className="flex items-center">
        <input
          type="checkbox"
          id={option.toLowerCase().replace(/\s+/g, "-")}
          className="mr-2"
          name={option.toLowerCase().replace(/\s+/g, "-")}
        />
        <label
          htmlFor={option.toLowerCase().replace(/\s+/g, "-")}
          className="text-gray-700 text-sm"
        >
          {option}
        </label>
      </div>
    ))}
    {maxSelect && (
      <p className="text-xs text-gray-500 col-span-full mt-2">
        (Check no more than {maxSelect} answers)
      </p>
    )}
  </div>
);

const BuildForm = ({ showCreateSurveyButton = false }) => {
  const likertQuestions = [
    "Every ethnic group should be accepted into society.",
    "More focus should be placed on criminal rehabilitation rather than punishment.",
    "Reservations should only be available to low-income families.",
    "Government employees should be paid competitively with those in the private sector.",
    "Corporations should be barred from participating in political campaigns.",
    "Policies to close the gap between the rich and the poor should be implemented.",
    "The administration is required to be open and upfront with the public about all efforts.",
    "The government should work with businesses to help them create more jobs.",
    "The safety of the environment is more important than the cash generated by company taxes.",
    "Government incentives for socially responsible businesses should be increased.",
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white border border-gray-300 rounded-sm p-4 sm:p-6">
        <div className="border border-gray-300 p-2 rounded">
          <h1 className="font-bold m-3 text-lg sm:text-xl">Political Survey</h1>
        </div>

        <form className="mt-8 space-y-6 sm:space-y-8">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              1. Are you politically active?
            </label>
            <RadioGroup name="political_active" options={["Yes", "No"]} />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              2. When thinking about politics, how do you describe yourself as?
            </label>
            <CheckboxGroup
              options={[
                "Libertarian",
                "Moderate",
                "Conservative",
                "Liberal",
                "Progressive",
                "Don't know",
                "Other",
              ]}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Please state your level of agreement for the following:
            </label>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300 text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2"></th>
                    {[
                      "Completely Disagree",
                      "Somewhat Disagree",
                      "Neutral",
                      "Somewhat Agree",
                      "Completely Agree",
                    ].map((header) => (
                      <th key={header} className="border border-gray-300 p-2">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {likertQuestions.map((question, index) => (
                    <LikertQuestion
                      key={index}
                      question={question}
                      name={`question${index + 12}`}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-normal text-sm sm:text-md rounded-md py-1 px-3 sm:py-2 sm:px-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuildForm;
