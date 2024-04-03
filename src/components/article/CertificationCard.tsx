import { useState, ReactElement, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
    modules: [Navigation],
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-70 flex items-center justify-center text-justify">
      <div className="z-50 bg-white dark:bg-[#000302] h-fit w-[90%] md:w-[60%] shadow-2xl p-8 overflow-y-scroll modal rounded-md">
        <div onClick={(e) => e.stopPropagation()} className="text-right">
          <button onClick={closeModal}>
            <svg
              className="text-[#000302] dark:text-white hover:text-red-500 dark:hover:text-red-600 transition-colors duration-300 ease-in-out"
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
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <Swiper
            {...swiperConfig}
            className=" overflow-hidden"
            style={{
              height: "fit-content",
              width: "65%",
              margin: "auto",
            }}
          >
            {images.map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="object-contain rounded md:mt-0 mt-30"
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
  const openModalButtonRef = useRef<HTMLButtonElement>(null);

  const toggleBodyScroll = (shouldScroll: boolean) => {
    document.body.style.overflow = shouldScroll ? "auto" : "hidden";
  };

  useEffect(() => {
    toggleBodyScroll(!isModalOpen);
    return () => toggleBodyScroll(true);
  }, [isModalOpen]);

  function closeModal(): void {
    setModalOpen(false);
    if (openModalButtonRef.current) {
      openModalButtonRef.current.blur();
    }
  }

  return (
    <>
      <div
        className={`flex flex-col flex-grow h-auto text-card-foreground transform rounded shadow-lg ${
          isEven
            ? "bg-blue-500 dark:bg-gray-900"
            : "bg-blue-400 dark:bg-gray-800"
        }`}
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="tracking-tight text-[1rem] font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm text-white">{issuer}</p>
        </div>
        <div className="p-6 mt-auto flex md:flex-row gap-6 flex-col justify-start items-start md:justify-between md:items-center pt-1">
          <div className="flex flex-row gap-2 items-center">
            <div className="p-2 rounded-lg bg-[#101314] dark:bg-transparent">
              {svg}
            </div>
            <p className="text-white">{date}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              ref={openModalButtonRef}
              onClick={() => {
                setModalOpen(true);
              }}
              className="inline-flex items-center justify-center mr-2 rounded font-medium border bg-background h-10 px-4 py-2 text-xs text-white border-white transition ease-in-out delay-150 md:hover:scale-105 duration-300"
            >
              Voir plus
            </button>
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
      date: "Septembre 2023",
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
      images: ["AWS_Certif_1.webp", "AWS_Certif_2.webp"],
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Netacad",
      date: "Septembre 2022",
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
      images: ["Cyber_1.webp"],
    },
    {
      title: "Apprenez à programmer en Python",
      issuer: "Openclassroom",
      date: "Novembre 2020",
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
      images: ["Openclassroom.webp"],
    },
    {
      title: "Créez votre site web avec HTML5 et CSS3",
      issuer: "Openclassroom",
      date: "Décembre 2023",
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
      images: ["Openclassroom.webp"],
    },
    {
      title: "Apprenez à programmer avec JavaScript",
      issuer: "Openclassroom",
      date: "Décembre 2023",
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
      images: ["Openclassroom.webp"],
    },
    {
      title: "Créez une application React complète",
      issuer: "Openclassroom",
      date: "Mars 2024",
      svg: (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 32 32"
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
              d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
              fill="#53C1DE"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
              fill="#53C1DE"
            ></path>
          </g>
        </svg>
      ),
      images: ["Openclassroom.webp"],
    },
    {
      title: "Codez un site web accessible avec HTML & CSS",
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
      images: ["Openclassroom.webp"],
    },
    {
      title: "Concevez un contenu web accessible",
      issuer: "Openclassroom",
      date: "Mai 2023",
      svg: (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
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
            <g fill="#fff " fill-rule="evenodd">
              <path d="M8 9H5a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2zm0 4H5a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2zm0 4H5a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zm8-8h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2zm0 4h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2zm0 4h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2z"></path>
              <path d="M22 2h-9c-.351 0-.696.093-1 .27A1.994 1.994 0 0 0 11 2H2a2.006 2.006 0 0 0-2 2v16a2.006 2.006 0 0 0 2 2h9c.34.003.676-.087.97-.26a.05.05 0 0 1 .06 0c.294.173.63.263.97.26h9a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2zM10.5 20h-8a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5zm11.5-.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v15z"></path>
            </g>
          </g>
        </svg>
      ),
      images: ["Openclassroom.webp"],
    },
    {
      title: "Utilisez ChatGPT pour améliorer votre productivité",
      issuer: "Openclassroom",
      date: "Mars 2024",
      svg: (
        <svg
          width="30px"
          height="30px"
          fill="#94f4c8"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#94f4c8"
          stroke-width="0.00024000000000000003"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>OpenAI icon</title>
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
          </g>
        </svg>
      ),
      images: ["Openclassroom.webp"],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-[#000302] text-[#000302] dark:text-white p-10">
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
