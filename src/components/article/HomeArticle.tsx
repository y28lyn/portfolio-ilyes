const HomeArticle = () => {
  return (
    <>
      <section className="overflow-hidden bg-[#000302] pt-28 px-10 -mt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Salut 👋 <br></br> je suis <br className="block sm:hidden" />
                BEIRADE Ilyes
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-200 md:mt-8">
                Étudiant en BTS SIO 2ème année, passionné par le développement
                web avec React, TypeScript, et Tailwind CSS, et un intérêt pour
                le PHP.
              </p>

              <p className="mt-4 text-xl text-gray-200 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-blue-700"></span>
                  <span className="relative"> Vous avez une question ? </span>
                </span>
                <br className="block sm:hidden" />
                <br className="md:block hidden"></br>
                Posez la moi sur
                <a
                  href="https://www.linkedin.com/in/ilyes-beirade-86920b222/"
                  target="blank"
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline ml-2"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="relative md:mt-0 mt-8">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="/ilyes-home.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeArticle;
