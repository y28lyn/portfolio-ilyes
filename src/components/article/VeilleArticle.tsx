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
        className={`overflow-hidden rounded shadow ${
          props.isEven ? "bg-gray-700" : "bg-gray-800"
        }`}
      >
        <div className="p-5">
          <div className="relative">
            <img
              className="object-cover w-full h-[12rem]"
              src={props.imgUrl}
              alt=""
            />

            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-700 rounded-sm opacity-90">
                {props.source}
              </span>
            </div>
          </div>
          <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-200 uppercase">
            {props.date}
          </span>
          <span className="block mt-1 text-[0.53rem] font-semibold tracking-widest text-gray-200 uppercase">
            Auteur: {props.author}
          </span>
          <p className="mt-3 text-2xl font-semibold text-white">
            {props.title}
          </p>
          <p className="mt-1 text-base text-gray-300">{props.desc}</p>
          <div className="flex flex-row gap-2 pt-3">
            <a href={props.linkUrl} target="_blank">
              <button className="w-25 bg-white text-black font-semibold p-1 rounded transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105 duration-300 px-6">
                Lire plus
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VeilleArticle;
