import ExperienceArticle from "../components/article/ExperienceArticle";
import Banner from "../components/header/Banner";

const Experience = () => {
  const experienceData = [
    {
      position: "Employé polyvalent",
      company: "Cinéma Les Alizées",
      timePeriod: { year: "Oct. 2021", color: "bg-rose-300 dark:bg-rose-500" },
      description:
        "Au cinéma de Bron, j'ai pu joué un rôle central durant mes études en accueillant les visiteurs, en assurant le contrôle du pass sanitaire, et en gérant l'ouverture/fermeture des salles. Cette expérience a renforcé ma polyvalence et ma volonté de contribuer à une atmosphère conviviale, tout en participant au succès du cinéma.",
      logoUrl:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      position: "Agent de nettoiement",
      company: "Grand Lyon",
      timePeriod: {
        year: "Juil. 2023",
        color: "bg-emerald-300 dark:bg-emerald-500",
      },
      description:
        "J'ai occupé le poste d'agent de nettoiement saisonnier au sein d'une équipe. Mon rôle consistait à assurer la propreté et l'entretien des espaces publics, contribuant ainsi à créer un environnement agréable pour les résidents et les visiteurs. J'ai acquis une expérience dans les tâches de nettoyage et d'entretien des espaces extérieurs.",
      logoUrl:
        "https://images.unsplash.com/photo-1610349100246-9535097a884f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      position: "Développeur web",
      company: "INOLIB",
      timePeriod: {
        year: "Mai 2023 - Juin 2023 & Jan. 2024 - Fév. 2024",
        color: "bg-blue-300 dark:bg-blue-500",
      },
      description:
        "En tant que stagiaire chez Inolib, j'ai eu le privilège de contribuer au développement de diverse site web de l'entreprise, en mettant l'accent sur l'accessibilité et l'expérience utilisateur. Pendant cette expérience transformatrice, j'ai travaillé en étroite collaboration avec une équipe dynamique de professionnels.",
      logoUrl:
        "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsdWUlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <>
      <header>
        <Banner
          title="Mes expériences professionelles"
          subtitle="Les moments clés de ma carrière, de débuts prometteurs à des défis professionnels relevés avec succès."
          backgroundImageUrl="https://images.unsplash.com/photo-1569087306794-db9947393580?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Mes projets"
          button1Link="/situation"
          button2Label="Lire plus"
        />
      </header>
      <main id="main" className="p-10 bg-white dark:bg-[#000302]">
        <ExperienceArticle experiences={experienceData} />
      </main>
    </>
  );
};

export default Experience;
