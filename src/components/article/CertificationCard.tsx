import React, { ReactElement } from "react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  svg: ReactElement;
}

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  issuer,
  date,
  svg,
}) => {
  return (
    <div
      className="border text-card-foreground bg-gray-900 transform transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="tracking-tight text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm text-white">{issuer}</p>
      </div>
      <div className="p-6 flex justify-between items-center pt-4">
        <p className="text-white">{date}</p>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 text-xs text-white border-white hover:bg-transparent hover:border-white hover:text-white">
            Details
          </button>
          {svg}
        </div>
      </div>
    </div>
  );
};

const CertificationSection: React.FC = () => {
  // Define your SVG elements here or import them as needed
  const googleCloudSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-6 w-6 text-green-400"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  );

  const awsSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-6 w-6 text-yellow-500"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
      <path d="M9 22v-4h6v4"></path>
      <path d="M8 6h.01"></path>
      <path d="M16 6h.01"></path>
      <path d="M12 6h.01"></path>
      <path d="M12 10h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M16 10h.01"></path>
      <path d="M16 14h.01"></path>
      <path d="M8 10h.01"></path>
      <path d="M8 14h.01"></path>
    </svg>
  );

  const microsoftSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-6 w-6 text-blue-500"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 14s1.5 1 4 1 4-1 4-1"></path>
      <path d="M9 9s-1.5 4-2 5 1 2 1 2"></path>
      <path d="M21 12h-2c0 5-4 9-9 9s-9-4-9-9h-2"></path>
    </svg>
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#000302] text-white p-10">
      <CertificationCard
        title="Google Certified Professional Data Engineer"
        issuer="Google Cloud"
        date="Nov 2023"
        svg={googleCloudSvg}
      />
      <CertificationCard
        title="AWS Certified Solutions Architect"
        issuer="Amazon Web Services"
        date="Oct 2023"
        svg={awsSvg}
      />
      <CertificationCard
        title="Microsoft Certified: Azure Fundamentals"
        issuer="Microsoft"
        date="Sep 2023"
        svg={microsoftSvg}
      />
    </section>
  );
};

export default CertificationSection;
