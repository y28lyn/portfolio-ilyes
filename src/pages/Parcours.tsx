import ExperienceArticle from "../components/article/ExperienceArticle";
import Banner from "../components/header/Banner";

const Parcours = () => {
  const parcoursData = [
    {
      position: "Lycée La Martinière Monplaisir",
      company: "Bac STI2D SIN",
      timePeriod: {
        year: "Sept. 2019 - Juil. 2021",
        color: "bg-rose-500",
      },
      logoUrl:
        "https://www.wicona.com/globalassets/wiconafinder-references/france/lycee-la-martiniere/p1-p2-p5-la-martiniere-001.jpg?ts=637888962920000000&w=1440&quality=90&format=jpeg",
      description:
        "Au Lycée La Martinière Monplaisir de 2019 à 2021, j'ai suivi la spécialité SIN pour le Baccalauréat STI2D. Mon parcours a inclut l'étude des matériaux de construction, l'analyse énergétique, et la création d'une bouée anti-tsunami avec GPS en Arduino, enrichi par l'apprentissage du langage Python, me préparant ainsi pour des défis futurs dans l'industrie et le développement durable.",
    },
    {
      position: "IUT Lyon 1",
      company: "BUT Informatique",
      timePeriod: {
        year: "Sept. 2021 - Juil. 2022",
        color: "bg-emerald-500",
      },
      logoUrl: "/iutlyon.jpg",
      description:
        "À l'IUT Lyon 1 de septembre 2021 à juillet 2022, j'ai poursuivi le BUT Informatique. Mon programme a couvert les bases des réseaux, la programmation (C, Java, SQL/PLSQL, HTML/CSS), et la gestion de projets avec Git. J'ai développé un gestionnaire Excel, une application avec interface homme-machine, des sites vitrines, et acquis une compréhension approfondie de l'architecture informatique.",
    },
    {
      position: "Lycée Jacques Brel",
      company: "BTS SIO SLAM",
      timePeriod: {
        year: "Sept. 2022 - Juil. 2024",
        color: "bg-blue-500",
      },
      logoUrl:
        "https://www.expressions-venissieux.fr/wp-content/uploads/2014/08/Brel-1200x801.jpg",
      description:
        "Au Lycée Jacques Brel de septembre 2022 à juillet 2024, j'ai obtenu un BTS en SIO option SLAM. Ma formation a inclus les bases des réseaux, l'analyse de trames, le routage, la gestion des incidents, et la programmation en Python, Javascript, SQL, HTML/CSS, C# et PHP. J'ai également acquis des connaissances en cybersécurité.",
    },
  ];

  return (
    <>
      <header>
        <Banner
          title="Mon parcours scolaire"
          subtitle="Mon cheminement académique, source de passion et de connaissances approfondies."
          backgroundImageUrl="https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Mes expériences"
          button1Link="/experience"
          button2Label="Lire plus"
        />
      </header>
      <main id="main" className="p-10 bg-[#000302]">
        <ExperienceArticle experiences={parcoursData} />
      </main>
    </>
  );
};

export default Parcours;
