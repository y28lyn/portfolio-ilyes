interface ExperienceItemProps {
  position: string;
  company: string;
  timePeriod: {
    year: string;
    color: string;
  };
  description: string;
  logoUrl: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  position,
  company,
  timePeriod,
  description,
  logoUrl,
}) => {
  return (
    <div className="p-6 w-fit h-fit bg-gray-800 text-white shadow-lg rounded">
      <div className="items-center justify-between text-base">
        <div className="flex flex-row items-center">
          <img
            alt=""
            className="w-20 h-20 mb-2 rounded-full"
            src={logoUrl}
            style={{
              aspectRatio: "1 / 1",
              objectFit: "cover",
            }}
          />
          <div className="ml-6">
            <h3 className="text-xl font-semibold text-white">{position}</h3>
            <p className="text-gray-200 text-left">{company}</p>
          </div>
        </div>
        <div
          className={`text-sm py-1 px-2 rounded text-white mb-2 mt-2 ${timePeriod.color}`}
        >
          {timePeriod.year}
        </div>
      </div>
      <div className="mt-2 text-gray-300">
        <p>{description}</p>
      </div>
    </div>
  );
};

interface ExperienceArticleProps {
  experiences: ExperienceItemProps[];
}

export const ExperienceArticle: React.FC<ExperienceArticleProps> = ({
  experiences,
}) => {
  return (
    <section className="flex justify-center w-full">
      <div className="container px-0 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

const experienceData: ExperienceItemProps[] = [
  {
    position: "Employé polyvalent",
    company: "Cinéma Les Alizées",
    timePeriod: { year: "Oct. 2021", color: "bg-rose-500" },
    description:
      "Au cinéma de Bron, j'ai pu joué un rôle central durant mes études en accueillant les visiteurs, en assurant le contrôle du pass sanitaire, et en gérant l'ouverture/fermeture des salles. Cette expérience a renforcé ma polyvalence et ma volonté de contribuer à une atmosphère conviviale, tout en participant au succès du cinéma.",
    logoUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    position: "Développeur web",
    company: "INOLIB",
    timePeriod: { year: "Mai 2023 - Juin 2023", color: "bg-blue-500" },
    description:
      "En tant que stagiaire chez Inolib, j'ai eu le privilège de contribuer au développement de diverse site web de l'entreprise, en mettant l'accent sur l'accessibilité et l'expérience utilisateur. Pendant cette expérience transformatrice, j'ai travaillé en étroite collaboration avec une équipe dynamique de professionnels.",
    logoUrl:
      "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsdWUlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    position: "Agent de nettoiement",
    company: "Grand Lyon",
    timePeriod: { year: "Juil. 2023", color: "bg-emerald-500" },
    description:
      "J'ai occupé le poste d'agent de nettoiement saisonnier au sein d'une équipe. Mon rôle consistait à assurer la propreté et l'entretien des espaces publics, contribuant ainsi à créer un environnement agréable pour les résidents et les visiteurs. J'ai acquis une expérience dans les tâches de nettoyage et d'entretien des espaces extérieurs.",
    logoUrl:
      "https://images.unsplash.com/photo-1610349100246-9535097a884f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const App: React.FC = () => {
  return <ExperienceArticle experiences={experienceData} />;
};

export default App;
