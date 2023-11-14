import { useEffect, useState } from "react";

interface ContentCardProps {
  title: string;
  desc: string;
  imgUrl: string;
  link: string;
  linkUrl: string;
  titleModal: string;
  descModal: string;
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
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
        <img
          alt="Placeholder image"
          className="w-full"
          height="200"
          src={props.imgUrl}
          style={{
            aspectRatio: "350/200",
            objectFit: "cover",
          }}
          width="350"
        />
        <div className="p-6">
          <h2 className="text-lg md:text-xl text-white font-bold mb-2">
            {props.title}
          </h2>
          <p className="text-gray-100">{props.desc}</p>
          <div className="flex flex-row gap-2">
            <button
              onClick={openModal}
              className="w-25 bg-white text-black font-semibold p-1 rounded transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105 duration-300 mt-6 px-6"
            >
              Voir plus
            </button>
            <a href={props.linkUrl} target="_blank">
              <button className="w-25 bg-white text-black font-semibold p-1 rounded transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105 duration-300 mt-6 px-6">
                {props.link}
              </button>
            </a>
          </div>

          {modalOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center">
              <div className="bg-gray-700 h-[75vh] md:h-[80vh] w-[80vw] mt-10 rounded-lg shadow-lg mx-auto p-8 overflow-y-scroll">
                <div className="flex justify-end">
                  <button onClick={closeModal}>
                    <svg
                      className="text-white hover:text-gray-400 cursor-pointer"
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
                <h2 className="text-lg md:text-xl text-white font-bold mb-2">
                  {props.titleModal}
                </h2>
                <p className="text-gray-300">{props.descModal}</p>a
                <img
                  src="https://www.gravatar.com/avatar/5e4fa66a71e59fe32c2d602bdb5068b5?s=64&d=identicon&r=PG"
                  alt=""
                  className="h-96"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentCard;
