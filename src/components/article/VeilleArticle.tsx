import React from "react";

interface VeilleProps {
  source: string;
  date: string;
  author: string;
  title: string;
  desc: string;
  imgUrl: string;
  linkUrl: string;
  isEven: boolean;
}

const VeilleArticle: React.FC<VeilleProps> = (props: VeilleProps) => {
  return (
    <>
      <div
        className={`flex flex-col overflow-hidden rounded ${
          props.isEven
            ? "bg-blue-500 dark:bg-gray-900"
            : "bg-blue-400 dark:bg-gray-800"
        }`}
      >
        <div className="relative">
          <a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
            <img
              className="object-cover w-full h-auto"
              src={props.imgUrl}
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                stroke-width="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M18 20.75H6C5.27065 20.75 4.57118 20.4603 4.05546 19.9445C3.53973 19.4288 3.25 18.7293 3.25 18V6C3.25 5.27065 3.53973 4.57118 4.05546 4.05546C4.57118 3.53973 5.27065 3.25 6 3.25H12C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4C12.75 4.19891 12.671 4.38968 12.5303 4.53033C12.3897 4.67098 12.1989 4.75 12 4.75H6C5.66848 4.75 5.35054 4.8817 5.11612 5.11612C4.8817 5.35054 4.75 5.66848 4.75 6V18C4.75 18.3315 4.8817 18.6495 5.11612 18.8839C5.35054 19.1183 5.66848 19.25 6 19.25H18C18.3315 19.25 18.6495 19.1183 18.8839 18.8839C19.1183 18.6495 19.25 18.3315 19.25 18V12C19.25 11.8011 19.329 11.6103 19.4697 11.4697C19.6103 11.329 19.8011 11.25 20 11.25C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12V18C20.75 18.7293 20.4603 19.4288 19.9445 19.9445C19.4288 20.4603 18.7293 20.75 18 20.75Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M20 8.75C19.8019 8.74741 19.6126 8.66756 19.4725 8.52747C19.3324 8.38737 19.2526 8.19811 19.25 8V4.75H16C15.8011 4.75 15.6103 4.67098 15.4697 4.53033C15.329 4.38968 15.25 4.19891 15.25 4C15.25 3.80109 15.329 3.61032 15.4697 3.46967C15.6103 3.32902 15.8011 3.25 16 3.25H20C20.1981 3.25259 20.3874 3.33244 20.5275 3.47253C20.6676 3.61263 20.7474 3.80189 20.75 4V8C20.7474 8.19811 20.6676 8.38737 20.5275 8.52747C20.3874 8.66756 20.1981 8.74741 20 8.75Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M13.5 11.25C13.3071 11.2352 13.1276 11.1455 13 11C12.877 10.8625 12.809 10.6845 12.809 10.5C12.809 10.3155 12.877 10.1375 13 10L19.5 3.5C19.5687 3.42631 19.6515 3.36721 19.7435 3.32622C19.8355 3.28523 19.9348 3.26319 20.0355 3.26141C20.1362 3.25963 20.2362 3.27816 20.3296 3.31588C20.423 3.3536 20.5078 3.40974 20.579 3.48096C20.6503 3.55218 20.7064 3.63701 20.7441 3.7304C20.7818 3.82379 20.8004 3.92382 20.7986 4.02452C20.7968 4.12523 20.7748 4.22454 20.7338 4.31654C20.6928 4.40854 20.6337 4.49134 20.56 4.56L14 11C13.8724 11.1455 13.6929 11.2352 13.5 11.25Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
          </a>

          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-blue-300 dark:bg-gray-700 rounded-sm opacity-90">
              {props.source}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-5">
          <span className="md:mt-3 text-sm font-semibold tracking-widest text-gray-200 uppercase">
            {props.date}
          </span>
          <span className="mt-1 text-[0.53rem] font-semibold tracking-widest text-gray-200 uppercase">
            Auteur: {props.author}
          </span>
          <p className="mt-3 text-2xl font-semibold text-white">
            {props.title}
          </p>
          <p className="mt-1 text-base text-gray-300">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default VeilleArticle;
