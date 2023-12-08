import { useEffect, useState } from "react";

interface ContentCardProps {
  title: string;
  desc: string;
  titleModal: string;
  contexte: string;
  besoin: string;
  environnement: string;
  realisation: string;
  bilan: string;
  competence: string;
  imgUrl: string;
  bannerUrl: string;
  link: string;
  linkUrl: string;
  cardColor: string;
  showGitHubButton?: boolean;
  showLinkButton?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = (props: ContentCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <>
      <div
        className={`${props.cardColor} rounded-lg overflow-hidden shadow-lg`}
      >
        <img
          alt="Placeholder image"
          className="object-cover w-full h-[12rem]"
          height="200"
          src={props.imgUrl}
          style={{
            aspectRatio: "350/200",
            objectFit: "cover",
          }}
          width="350"
        />
        <div className="p-6 md:h-[16rem] flex flex-col flex-grow">
          <h2 className="text-lg md:text-xl text-white font-bold mb-2">
            {props.title}
          </h2>
          <p className="text-gray-200">{props.desc}</p>
          <div className="md:mt-auto mt-5 flex flex-row gap-2 items-end">
            <button
              onClick={openModal}
              className="w-32 bg-white text-black font-semibold p-1 mr-1 rounded transition ease-in-out delay-150 md:hover:scale-105 duration-300"
            >
              Voir plus
            </button>
            {props.showGitHubButton && (
              <>
                <span className="sr-only">Github</span>
                <a
                  href={props.linkUrl}
                  target="_blank"
                  className="w-7 h-7 text-white transition ease-in-out delay-150 md:hover:scale-110 duration-300"
                >
                  <svg
                    fill="#fff"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 7.069 4.577 13.07 10.943 15.165.8.148 1.092-.348 1.092-.77 0-.382-.014-1.389-.02-2.72-4.45.97-5.391-2.148-5.391-2.148-.727-1.848-1.776-2.34-1.776-2.34-1.452-.991.11-.973.11-.973 1.605.113 2.448 1.65 2.448 1.65 1.425 2.44 3.743 1.737 4.656 1.328.145-1.033.562-1.738 1.022-2.135-3.572-.408-7.33-1.787-7.33-7.966 0-1.758.627-3.192 1.65-4.313-.16-.41-.717-2.046.157-4.262 0 0 1.35-.434 4.42 1.654a14.53 14.53 0 014.11 0c3.066-2.088 4.416-1.654 4.416-1.654.874 2.216.317 3.852.157 4.262 1.024 1.121 1.647 2.554 1.647 4.313 0 6.192-3.762 7.555-7.34 7.958.577.496 1.088 1.478 1.088 2.974 0 2.147-.02 3.879-.02 4.407 0 .426.287.923 1.1.768 6.365-2.097 10.941-8.1 10.941-15.167C32 7.163 24.836 0 16 0"></path>
                  </svg>
                </a>
              </>
            )}
            {props.showLinkButton && (
              <>
                <a
                  href={props.link}
                  target="_blank"
                  className="w-7 h-7 text-white transition ease-in-out delay-150 md:hover:scale-110 duration-300"
                >
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
                </a>
              </>
            )}
          </div>

          {modalOpen && (
            <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-70 flex items-center justify-center text-justify">
              <div className="z-50 bg-zinc-900 h-[70%] w-[90%] md:w-[70%] shadow-2xl p-8 overflow-y-scroll modal rounded-md">
                <div className="flex justify-end mb-5">
                  <button onClick={closeModal}>
                    <svg
                      className="text-white hover:text-red-500 transition-colors duration-300 ease-in-out"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <ul>
                  <li>
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-2">
                      {props.titleModal}
                    </h2>
                    <div className="block w-full h-[1px] bg-white mx-auto"></div>
                  </li>

                  <li className="mt-8">
                    <h2 className="text-lg md:text-2xl text-gray-200 font-bold mb-2">
                      Contexte
                    </h2>
                    <p className="text-gray-300">{props.contexte}</p>
                  </li>

                  <li className="mt-8">
                    <h2 className="text-lg md:text-2xl text-gray-200 font-bold mb-2">
                      Besoin
                    </h2>
                    <p className="text-gray-300">{props.besoin}</p>
                  </li>

                  <li className="mt-8">
                    <h2 className="text-lg md:text-2xl text-gray-200 font-bold mb-2">
                      Environnement
                    </h2>
                    <p className="text-gray-300">{props.environnement}</p>
                  </li>

                  <li className="mt-8">
                    <h2 className="text-lg md:text-2xl text-gray-200 font-bold mb-2">
                      Réalisation
                    </h2>
                    <p className="text-gray-300">{props.realisation}</p>
                  </li>

                  <li className="mt-8">
                    <h2 className="text-lg md:text-2xl text-gray-200 font-bold mb-2">
                      Bilan
                    </h2>
                    <p className="text-gray-300">{props.bilan}</p>
                  </li>
                  {props.showLinkButton && (
                    <>
                      <li className="mt-8">
                        <h2 className="text-lg md:text-2xl text-gray-200 font-bold mb-2">
                          Production associé
                        </h2>
                        <a
                          href={props.link}
                          target="blank"
                          className="underline text-blue-300 hover:text-blue-400"
                        >
                          {props.link}
                        </a>
                      </li>
                    </>
                  )}
                  <li className="mt-8">
                    <h2 className="text-lg md:text-2xl text-gray-200 font-bold mb-2">
                      Compétence mis en œuvre
                    </h2>
                    <p className="text-gray-300">{props.competence}</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentCard;
