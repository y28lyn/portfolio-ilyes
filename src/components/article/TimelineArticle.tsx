export default function TimelineArticle() {
  const timelineEvents = [
    {
      title: "Lycée Jacques Brel",
      diplome: "BTS SIO SLAM",
      date: "Septembre 2022 - Juillet 2024",
      image:
        "https://www.expressions-venissieux.fr/wp-content/uploads/2014/08/Brel-1200x801.jpg",
      description:
        "Au Lycée Jacques Brel de septembre 2022 à juillet 2024, j'ai obtenu un BTS en SIO option SLAM. Ma formation a inclus les bases des réseaux, l'analyse de trames, le routage, la gestion des incidents, et la programmation en Python, Javascript, SQL, HTML/CSS, C# et PHP. J'ai également acquis des connaissances en cybersécurité.",
      nombre: "1",
    },
    {
      title: "IUT Lyon 1",
      diplome: "BUT Informatique",
      date: "Septembre 2021 - Juillet 2022",
      image: "/iutlyon.jpg",
      description:
        "À l'IUT Lyon 1 de septembre 2021 à juillet 2022, j'ai poursuivi le BUT Informatique. Mon programme a couvert les bases des réseaux, la programmation (C, Java, SQL/PLSQL, HTML/CSS), et la gestion de projets avec Git. J'ai développé un gestionnaire Excel, une application avec interface homme-machine, des sites vitrines, et acquis une compréhension approfondie de l'architecture informatique.",
      nombre: "2",
    },
    {
      title: "Lycée La Martinière Monplaisir",
      diplome: "Bac STI2D SIN",
      date: "Septembre 2019 - Juillet 2021",
      image:
        "https://www.wicona.com/globalassets/wiconafinder-references/france/lycee-la-martiniere/p1-p2-p5-la-martiniere-001.jpg?ts=637888962920000000&w=1440&quality=90&format=jpeg",
      description:
        "Au Lycée La Martinière Monplaisir de 2019 à 2021, j'ai suivi la spécialité SIN pour le Baccalauréat STI2D. Mon parcours a inclut l'étude des matériaux de construction, l'analyse énergétique, et la création d'une bouée anti-tsunami avec GPS en Arduino, enrichi par l'apprentissage du langage Python, me préparant ainsi pour des défis futurs dans l'industrie et le développement durable.",
      nombre: "3",
    },
  ];

  return (
    <section className="pt-10 bg-[#000302] overflow-hidden flex justify-center">
      <div className="container">
        <div className="relative">
          <div className="border-r-2 border-slate-800 absolute h-full top-0 left-1/2" />
          <ul className="list-none m-0 p-0 space-y-16 md:space-y-24 lg:space-y-32">
            {timelineEvents.map((event, index) => {
              return (
                <li className="relative" key={index}>
                  <div className="bg-slate-800 rounded-full h-12 w-32 absolute left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold flex items-center justify-center md:hover:scale-105 duration-200 cursor-pointer">
                    {event.nombre}
                  </div>
                  <div className="grid grid-cols-1 grid-rows-1 space-x-4 md:space-x-6 lg:space-x-8 justify-items-center items-center p-6">
                    <div className="mb-8 mt-12 p-6 rounded-xl bg-slate-800 ">
                      <h2 className="flex-1 font-bold text-xl md:text-2xl lg:text-3xl text-white">
                        {event.title}
                      </h2>
                      <h3 className="flex-1 mt-2 font-bold text-lg md:text-xl lg:text-2xl text-gray-200">
                        {event.diplome}
                      </h3>
                      <h4 className="flex-1 mt-2 font-bold text-sm md:text-md lg:text-lg text-gray-200">
                        {event.date}
                      </h4>
                      <img
                        alt={event.title}
                        className="my-4 h-[20vh] md:h-[40vh] w-[80vw] md:w-[35vw] rounded-md object-cover"
                        src={event.image}
                        style={{
                          aspectRatio: "200/200",
                          objectFit: "cover",
                        }}
                      />
                      <p className="text-gray-300 text-md w-[80vw] md:w-[35vw] text-justify">
                        {event.description}
                      </p>
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
