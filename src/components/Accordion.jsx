import React, { useState } from 'react';

const accordionData = [
  {
    id: 1,
    title: "Research Methodology Formulation And Implementation Experience",
    description: "",
  },
  {
    id: 2,
    title: "Full Gamut Branding Competence",
    description:
      "At Zenera, we find innovative ways to reflect the core brand of our clients by disrupting common practices. We possess branding expertise only possible from years of practice and constant development. For this project, our branding expertise is a crucial skill necessary to understand your needs and how to meet them.",
  },
  {
    id: 3,
    title: "Data Analytics And Interpretation Competence",
    description: "",
  },
  {
    id: 4,
    title: "Sustainability",
    description: "",
  },
  {
    id: 5,
    title: "Confidentiality Commitment",
    description: "",
  },
];

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full mx-auto p-4 space-y-5">
      {accordionData.map((item) => (
        <div
          key={item.id}
          className="rounded-lg shadow-lg"
        >
          <div
            onClick={() => toggleAccordion(item.id)}
            className="flex items-center justify-between p-4 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-semibold">{`0${item.id}`}</span>
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
            <span>
              {activeId === item.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          </div>
          {activeId === item.id && item.description && (
            <div className="p-4 pt-0 text-gray-700 leading-relaxed">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
