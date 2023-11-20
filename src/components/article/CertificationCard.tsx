import React, { ReactElement } from "react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  svg: ReactElement;
  isEven: boolean;
}

const CertificationCard: React.FC<CertificationProps> = (
  props: CertificationProps
) => {
  return (
    <div
      className={`flex flex-col flex-grow h-[38vh] border text-card-foreground transform transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg ${
        props.isEven ? "bg-gray-900" : "bg-gray-800"
      }`}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="tracking-tight text-lg font-semibold text-white">
          {props.title}
        </h3>
        <p className="text-sm text-white">{props.issuer}</p>
      </div>
      <div className="p-6 mt-auto flex justify-between items-center pt-4">
        <p className="text-white">{props.date}</p>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 text-xs text-white border-white hover:bg-transparent hover:border-white hover:text-white">
            Details
          </button>
          {props.svg}
        </div>
      </div>
    </div>
  );
};

const CertificationSection: React.FC = () => {
  const certificationData = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "Sept 2023",
      svg: (
        <svg
          height="30"
          width="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ff4242"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68059 11.7184 8.20528 11.9374 8.66667 12.2426"
              stroke="#ff4242"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Netacad",
      date: "Sept 2022 & 2023",
      svg: (
        <svg
          height="30"
          width="30"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="#4d88ff"
          stroke="#4d88ff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#4d88ff"
              d="M255.565 30.643c-81.598 0-152.721 46.707-189.777 115.92h50.29l16.74-33.481h115.865c2.055-4.234 5.416-7.771 9.246-10.324 6.302-4.201 14.192-6.414 22.748-6.414 8.555 0 16.446 2.213 22.748 6.414 6.302 4.2 11.361 11.054 11.361 19.324 0 8.27-5.06 15.123-11.361 19.324-6.302 4.201-14.193 6.414-22.748 6.414-8.556 0-16.446-2.213-22.748-6.414-3.83-2.553-7.193-6.09-9.248-10.326H143.94l-7.74 15.482h52.402v17.999H57.143a228.822 228.822 0 0 0-5.96 15.48h36.974v17.998H45.802c-4.006 15.707-6.415 32.092-7.051 48.963h109.883l16.742-50.22h39.967v17.997h-26.996l-10.743 32.223h47.594c2.056-4.235 5.418-7.773 9.248-10.326 6.302-4.201 14.193-6.414 22.748-6.414 8.556 0 16.446 2.213 22.748 6.414 6.302 4.2 11.364 11.054 11.364 19.324 0 8.27-5.062 15.123-11.364 19.324-6.302 4.201-14.192 6.414-22.748 6.414-8.555 0-16.446-2.213-22.748-6.414-3.83-2.553-7.192-6.09-9.248-10.326h-95.74l24.482 48.963h78.143v17.998h-89.266l-33.482-66.961H38.751c1.614 42.826 14.69 82.527 36.129 115.922h90.096c2.055-4.235 5.42-7.773 9.25-10.326 6.302-4.201 14.19-6.414 22.746-6.414 8.555 0 16.446 2.213 22.748 6.414 6.302 4.2 11.363 11.054 11.363 19.324 0 8.27-5.061 15.123-11.363 19.324-6.302 4.201-14.193 6.414-22.748 6.414-8.556 0-16.444-2.213-22.746-6.414-3.83-2.553-7.193-6.09-9.248-10.324h-9.784l21.483 32.22h73.328l16.74-33.48h39.043v17.998h-27.92l-7.742 15.483h52.402v17.998H167.046l-33.483-50.219H87.716c39.81 50.37 100.234 82.44 167.85 82.44 92.336 0 171.262-59.806 202.581-144.358-4.882 10.507-10.77 19.344-17.916 25.893-7.212 6.609-16.06 10.914-25.628 10.914-9.569 0-18.417-4.305-25.63-10.914-7.212-6.61-13.145-15.546-18.054-26.182-9.818-21.272-15.537-49.542-15.537-80.711 0-31.169 5.719-59.44 15.537-80.71 4.91-10.637 10.842-19.573 18.055-26.183 7.212-6.609 16.06-10.914 25.629-10.914 9.568 0 18.416 4.305 25.628 10.914 7.146 6.549 13.034 15.386 17.916 25.893C426.828 90.448 347.902 30.643 255.565 30.643zm25.112 83.699c-5.313 0-9.98 1.533-12.766 3.39-2.786 1.858-3.348 3.375-3.348 4.35 0 .975.562 2.492 3.348 4.35 2.787 1.857 7.453 3.39 12.766 3.39s9.979-1.533 12.765-3.39c2.787-1.858 3.346-3.375 3.346-4.35 0-.975-.56-2.492-3.346-4.35-2.786-1.857-7.452-3.39-12.765-3.39zm159.037 83.44c-11.598 0-20.097 8.806-25.37 19.35-5.272 10.545-8.163 24.04-8.163 38.868 0 14.829 2.891 28.323 8.164 38.867 5.272 10.545 13.77 19.352 25.369 19.352 11.598 0 20.098-8.807 25.371-19.352 5.273-10.544 8.164-24.038 8.164-38.867 0-14.829-2.891-28.323-8.164-38.867-5.273-10.545-13.773-19.352-25.371-19.352zm4.613 20.157c1.556 1.497 3.261 3.769 4.93 7.106 3.662 7.324 6.299 18.517 6.299 30.955 0 12.438-2.637 23.63-6.3 30.955-3.662 7.324-7.506 9.57-9.542 9.57-2.036 0-5.88-2.246-9.543-9.57-3.663-7.324-6.297-18.517-6.297-30.955 0-.253.008-.502.01-.754a16.458 24.686 0 0 0 7.604 2.81 16.458 24.686 0 0 0 16.457-24.685 16.458 24.686 0 0 0-3.618-15.432zm-197.133 30.32c-5.313 0-9.977 1.534-12.763 3.391-2.787 1.858-3.348 3.375-3.348 4.35 0 .975.561 2.492 3.348 4.35 2.786 1.857 7.45 3.39 12.763 3.39 5.314 0 9.98-1.533 12.766-3.39 2.786-1.858 3.348-3.375 3.348-4.35 0-.975-.562-2.492-3.348-4.35-2.786-1.857-7.452-3.39-12.766-3.39zm-50.222 133.919c-5.314 0-9.978 1.533-12.764 3.39-2.786 1.858-3.348 3.375-3.348 4.35 0 .975.562 2.492 3.348 4.35 2.786 1.857 7.45 3.39 12.764 3.39 5.313 0 9.979-1.533 12.765-3.39 2.787-1.858 3.348-3.375 3.348-4.35 0-.975-.561-2.492-3.348-4.35-2.786-1.857-7.452-3.39-12.765-3.39z"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      title: "HTML / CSS",
      issuer: "Openclassroom",
      date: "Sept 2023",
      svg: (
        <svg
          height="30"
          width="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
              stroke="#da8aff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#000302] text-white p-10">
      {certificationData.map((certification, index) => (
        <CertificationCard
          isEven={index % 2 === 0}
          key={index}
          {...certification}
        />
      ))}
    </section>
  );
};

export default CertificationSection;
