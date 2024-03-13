import React from "react";

interface ExperienceItemProps {
  position: string;
  company: string;
  timePeriod: {
    year: string;
    color: string;
  };
  description: string;
  logoUrl: string;
}

interface ExperienceArticleProps {
  experiences: ExperienceItemProps[];
}

const ExperienceArticle: React.FC<ExperienceArticleProps> = ({
  experiences,
}) => {
  return (
    <section className="flex justify-center w-full">
      <div className="container px-0 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              {...experience}
              invert={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<ExperienceItemProps & { invert?: boolean }> = ({
  position,
  company,
  timePeriod,
  description,
  logoUrl,
  invert = false,
}) => {
  const bgClass = invert ? "bg-gray-800" : "bg-gray-900";
  return (
    <div
      className={`p-6 w-full md:w-1/3 h-auto shadow-lg rounded ${bgClass} text-white`}
    >
      <div className="items-center justify-between text-base">
        <div className="flex flex-row items-center">
          <img
            alt=""
            className="w-20 h-20 mb-2 rounded-full"
            src={logoUrl}
            style={{
              aspectRatio: "1 / 1",
              objectFit: "cover",
            }}
          />
          <div className="ml-6">
            <h3 className="text-xl font-semibold">{position}</h3>
            <p className="text-white">{company}</p>
          </div>
        </div>
        <div
          className={`text-[10px] md:text-sm md:text-center py-1 px-2 rounded mb-2 mt-2 ${timePeriod.color}`}
        >
          {timePeriod.year}
        </div>
      </div>
      <div className="mt-2 text-gray-300">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceArticle;
