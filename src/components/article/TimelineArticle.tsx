export default function TimelineArticle() {
  const timelineEvents = [
    {
      title: "Lycée La Martinière Monplaisir",
      image:
        "https://martiniere-monplaisir.ent.auvergnerhonealpes.fr/ressources-layout.do?ID_RESSOURCE=208&ID_PAGE=2",
      doodle:
        "https://doodleipsum.com/700x525/flat?i=acc5d19ce1cb073d842f312aa884f1d5",
      description:
        "Au Lycée La Martinière Monplaisir de 2019 à 2021, j'ai suivi la spécialité SIN pour le Baccalauréat STI2D. Mon parcours a inclut l'étude des matériaux de construction, l'analyse énergétique, et la création d'une bouée anti-tsunami avec GPS en Arduino, enrichi par l'apprentissage du langage Python, me préparant ainsi pour des défis futurs dans l'industrie et le développement durable.",
    },
    {
      title: "IUT Lyon 1",
      image: "/iutlyon.jpg",
      doodle:
        "https://doodleipsum.com/700x525/flat?i=d9e22222279c1e46487c4dc95a43baa3",
      description:
        "À l'IUT Lyon 1 de septembre 2021 à juillet 2022, j'ai poursuivi le BUT Informatique. Mon programme a couvert les bases des réseaux, la programmation (C, Java, SQL/PLSQL, HTML/CSS), et la gestion de projets avec Git. J'ai développé un gestionnaire Excel, une application avec interface homme-machine, des sites vitrines, et acquis une compréhension approfondie de l'architecture informatique. Ma formation a renforcé mes compétences polyvalentes en informatique et ma capacité à gérer efficacement des projets.",
    },
    {
      title: "Lycée Jacques Brel",
      image:
        "https://www.expressions-venissieux.fr/wp-content/uploads/2014/08/Brel-1200x801.jpg",
      doodle:
        "https://doodleipsum.com/700x525/flat?i=1ce023f33f8d77d4a563b57e2eb01643",
      description:
        "Au Lycée Jacques Brel de septembre 2022 à juillet 2024, j'ai obtenu un BTS en SIO option SLAM. Ma formation a inclus les bases des réseaux, l'analyse de trames, le routage, la gestion des incidents, et la programmation en Python, Javascript, SQL, HTML/CSS, C# et PHP. J'ai également acquis des connaissances en cybersécurité.",
    },
  ];
  return (
    <section className="pt-12 md:pt-24 lg:pt-32 bg-[#000302] overflow-hidden">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="relative mx-8">
          <div className="border-r-2 border-gray-600 absolute h-full top-0 left-1/2" />
          <ul className="list-none m-0 p-0 space-y-16 md:space-y-24 lg:space-y-32">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <li className="relative" key={index}>
                  <div
                    className={`bg-gray-500 rounded-full h-12 w-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 space-x-4 md:space-x-6 lg:space-x-8 justify-items-center items-center">
                    <div
                      className={`mb-8 mt-12 bg-[#000302] p-2 border-6 border-gray-500 border-solid ${
                        isEven ? "md:col-start-1" : "md:col-start-2 row-start-1"
                      }`}
                    >
                      <h2 className="flex-1 font-bold text-lg md:text-xl lg:text-2xl text-gray-400">
                        {event.title}
                      </h2>
                      <img
                        alt={event.title}
                        className="my-4 h-[20vh] md:h-[40vh] w-[80vw] md:w-[35vw] rounded-md object-cover"
                        src={event.image}
                        style={{
                          aspectRatio: "200/200",
                          objectFit: "cover",
                        }}
                      />
                      <p className="text-gray-400 text-lg w-[80vw] md:w-[35vw] text-justify">
                        {event.description}
                      </p>
                    </div>
                    <div className={`md:block hidden`}>
                      <img
                        alt=""
                        className="my-4 h-[70vh] w-[100vw] rounded-md object-cover"
                        src={event.doodle}
                        style={{
                          aspectRatio: "200/200",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
