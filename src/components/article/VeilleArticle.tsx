const VeilleArticle = () => {
  return (
    <>
      <div className="overflow-hidden bg-gray-700 rounded shadow">
        <div className="p-5">
          <div className="relative">
            <img
              className="object-cover w-full h-full"
              src="https://blog.playstation.com/tachyon/2023/10/95664514e9fff8f3455fc015bbab08ef0e101523-scaled.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5"
              alt=""
            />

            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-700 rounded-sm opacity-50">
                Playstation
              </span>
            </div>
          </div>
          <span className="block mt-6 text-sm font-semibold tracking-widest text-white uppercase">
            12 Octobre, 2023
          </span>
          <span className="block mt-1 text-[0.53rem] font-semibold tracking-widest text-white uppercase">
            Auteur: Sid Shuman | Senior Director, SIE Content Communications
          </span>
          <p className="mt-3 text-2xl font-semibold text-white">
            Contrôleur Access pour la PS5
          </p>
          <p className="mt-1 text-base text-gray-100">
            La manette Access pour la PS5 sortira le 6 décembre 2023 et
            permettra aux joueurs en situation de handicap de jouer plus
            confortablement et plus longtemps...
          </p>
          <div className="flex flex-row gap-2 pt-3">
            <a
              href="https://blog.playstation.com/2023/10/12/access-controller-for-ps5-interview-how-the-highly-customizable-kit-was-created/"
              target="_blank"
            >
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
