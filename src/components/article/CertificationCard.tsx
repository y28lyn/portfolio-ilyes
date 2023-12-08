import { useState, ReactElement, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style.css";

const Modal: React.FC<{
  isOpen: boolean;
  closeModal: () => void;
  images: string[];
}> = ({ isOpen, closeModal, images }) => {
  if (!isOpen || !images.length) return null;

  const swiperConfig = {
    modules: [Pagination, Navigation],
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  };

  // Handle key events for closing the modal
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Space") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex items-center justify-center text-justify"
      style={{ zIndex: 1000 }}
      onClick={closeModal}
    >
      <div className="z-50 bg-black bg-opacity-80 border text-card-foreground h-[60vh] w-[90%] md:h-[83vh] md:w-[70%] mt-10 shadow-lg p-8 overflow-y-scroll">
        <div onClick={(e) => e.stopPropagation()}>
          <button
            onClick={closeModal}
            className="absolute z-50 mt-2 mr-2 text-white hover:text-red-500 transition-colors duration-500 ease-in-out text-3xl"
          >
            &times;
          </button>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <Swiper
            {...swiperConfig}
            className=" overflow-hidden"
            style={{
              height: "70vh",
              width: "100%",
              margin: "auto",
            }}
          >
            {images.map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="object-contain w-full h-full"
                  style={{
                    objectPosition: "center",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  svg: ReactElement;
  isEven: boolean;
  images: string[];
}

interface CertificationCardProps extends CertificationProps {}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  svg,
  isEven,
  images,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Define a method to toggle the body scroll
  const toggleBodyScroll = (shouldScroll: boolean) => {
    document.body.style.overflow = shouldScroll ? "auto" : "hidden";
  };

  // Use the useEffect hook to listen for changes to isModalOpen
  useEffect(() => {
    toggleBodyScroll(!isModalOpen);
    // Clean up the toggle effect when the component unmounts or before next effect runs
    return () => toggleBodyScroll(true);
  }, [isModalOpen]); // Only re-run the effect if isModalOpen changes

  function closeModal(): void {
    setModalOpen(false);
  }

  return (
    <>
      <div
        className={`flex flex-col flex-grow md:h-[30vh] border text-card-foreground transform rounded shadow-lg ${
          isEven ? "bg-gray-900" : "bg-gray-800"
        }`}
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="tracking-tight text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm text-white">{issuer}</p>
        </div>
        <div className="p-6 mt-auto flex justify-between items-center pt-1">
          <p className="text-white">{date}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              className="inline-flex items-center justify-center mr-2 rounded font-medium border bg-background h-10 px-4 py-2 text-xs text-white border-white transition ease-in-out delay-150 md:hover:scale-105 duration-300"
            >
              Details
            </button>
            {svg}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} images={images} />
    </>
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
      date: "Sept 2022",
      svg: (
        <svg
          width="30px"
          height="30px"
          fill="#7ad3ff"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#7ad3ff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Computer_worm">
              <path d="M115.7986,418.4517h96.8686v47.7026H162.2664a9.8965,9.8965,0,0,0,0,19.793H349.4646a9.8965,9.8965,0,0,0,0-19.793H299.0681V418.4517h96.8643a39.8462,39.8462,0,0,0,39.2651-33.3238H76.5334A39.8532,39.8532,0,0,0,115.7986,418.4517Z"></path>
              <path d="M454.1335,26.0527H382.1423a72.0844,72.0844,0,0,0-72.0088,72v41.39h54v-41.39a18.0254,18.0254,0,0,1,18.0088-18h71.9912a27,27,0,0,0,0-54Z"></path>
              <path d="M395.9324,159.2422H189.9783a91.2931,91.2931,0,0,1,4.6933,28.791v70.1982H219.87a46.8018,46.8018,0,0,1,0,93.6036h-27a91.91,91.91,0,0,1-91.8018-91.8018V189.835H77.0564a39.91,39.91,0,0,0-1.1909,9.34v166.16h360V323.0332a40.5,40.5,0,1,1,0-81V199.1753A39.9325,39.9325,0,0,0,395.9324,159.2422Zm-77.0669,105.291a31.5,31.5,0,1,1,31.5-31.5A31.4993,31.4993,0,0,1,318.8655,264.5332Z"></path>
              <path d="M120.8665,188.0332v72a72.0825,72.0825,0,0,0,72,72h27a27,27,0,1,0,0-54h-27a18.0234,18.0234,0,0,1-18-18v-72a72.0844,72.0844,0,0,0-72.0088-72H57.8665a27,27,0,0,0,0,54h44.9912A18.0254,18.0254,0,0,1,120.8665,188.0332Z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "HTML / CSS",
      issuer: "Openclassroom",
      date: "Déc 2023",
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
    {
      title: "Javascript",
      issuer: "Openclassroom",
      date: "Déc 2023",
      svg: (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-420.000000, -7479.000000)"
                fill="#ffec1f"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M379.328,7337.432 C377.583,7337.432 376.455,7336.6 375.905,7335.512 L375.905,7335.512 L377.435,7334.626 C377.838,7335.284 378.361,7335.767 379.288,7335.767 C380.066,7335.767 380.563,7335.378 380.563,7334.841 C380.563,7334.033 379.485,7333.717 378.724,7333.391 C377.368,7332.814 376.468,7332.089 376.468,7330.558 C376.468,7329.149 377.542,7328.075 379.221,7328.075 C380.415,7328.075 381.275,7328.491 381.892,7329.578 L380.429,7330.518 C380.107,7329.941 379.758,7329.713 379.221,7329.713 C378.67,7329.713 378.321,7330.062 378.321,7330.518 C378.321,7331.082 378.67,7331.31 379.476,7331.659 C381.165,7332.383 382.443,7332.952 382.443,7334.814 C382.443,7336.506 381.114,7337.432 379.328,7337.432 L379.328,7337.432 Z M375,7334.599 C375,7336.546 373.801,7337.575 372.136,7337.575 C370.632,7337.575 369.731,7337 369.288,7336 L369.273,7336 L369.266,7336 L369.262,7336 L370.791,7334.931 C371.086,7335.454 371.352,7335.825 371.996,7335.825 C372.614,7335.825 373,7335.512 373,7334.573 L373,7328 L375,7328 L375,7334.599 Z M364,7339 L384,7339 L384,7319 L364,7319 L364,7339 Z"
                    id="javascript-[#ffec1f]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Site web accessible",
      issuer: "Openclassroom",
      date: "Mai 2023",
      svg: (
        <svg
          width="30px"
          height="30px"
          fill="#ffbd80"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffbd80"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle cx="18" cy="4" r="2"></circle>
            <path d="m17.836 12.014-4.345.725 3.29-4.113a1 1 0 0 0-.227-1.457l-6-4a.999.999 0 0 0-1.262.125l-4 4 1.414 1.414 3.42-3.42 2.584 1.723-2.681 3.352a5.913 5.913 0 0 0-5.5.752l1.451 1.451A3.972 3.972 0 0 1 8 12c2.206 0 4 1.794 4 4 0 .739-.216 1.425-.566 2.02l1.451 1.451A5.961 5.961 0 0 0 14 16c0-.445-.053-.878-.145-1.295L17 14.181V20h2v-7a.998.998 0 0 0-1.164-.986zM8 20c-2.206 0-4-1.794-4-4 0-.739.216-1.425.566-2.02l-1.451-1.451A5.961 5.961 0 0 0 2 16c0 3.309 2.691 6 6 6 1.294 0 2.49-.416 3.471-1.115l-1.451-1.451A3.972 3.972 0 0 1 8 20z"></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Python",
      issuer: "Openclassroom",
      date: "Nov 2020",
      svg: (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-340.000000, -7599.000000)"
                fill="#4d88ff"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439"
                    id="python-[#127]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#000302] text-white p-10">
      {certificationData.map((certification, index) => (
        <CertificationCard
          images={["/AWS_Certif_1.png", "/AWS_Certif_2.png"]}
          isEven={index % 2 === 0}
          key={index}
          {...certification}
        />
      ))}
    </section>
  );
};

export default CertificationSection;
