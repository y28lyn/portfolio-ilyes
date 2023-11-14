import ContentCard from "./ContentCard";

export default function CardArticle() {
  const projects = [
    {
      title: "Refactoring d'Inolib",
      desc: "Optimisation du site INOLIB post-lancement. Améliorations d'images et de style avec TailwindCSS. Collaboration cruciale pour renforcer la réputation et l'expérience utilisateur.",
      imgUrl: "/inolib.png",
      link: "https://www.inolib.com/",
      linkUrl: "https://github.com/inolib/website",
      titleModal: "Refactoring d'Inolib",
      descModal: "Description du projet .",
    },
    {
      title: "Création d'InoFormation",
      desc: "Création d'une plateforme de formation interne sur l'accessibilité numérique. Utilisation de ReactJS, Typescript, TailwindCSS, et GIT. Renforcement de la réputation de l'entreprise.",
      imgUrl: "inoformation.png",
      link: "https://inolib-formation.vercel.app/",
      linkUrl: "https://github.com/y28lyn/inolib-formation",
      titleModal: "Création d'InoFormation",
      descModal: "Description du projet 2.",
    },
    {
      title: "Création d'Inotest",
      desc: "Projet majeur sur les tests d'accessibilité numérique et création d'une librairie de composants avec ReactJS, Typescript, TailwindCSS et GIT.",
      imgUrl: "inotest.png",
      link: "https://inotest.vercel.app/",
      linkUrl: "https://github.com/Dindonix/InoTest",
      titleModal: "Création d'InoTest",
      descModal: "Description du projet 3.",
    },
  ];

  return (
    <div className="bg-[#000302]">
      <div className="container mx-auto py-12 px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ContentCard
              key={index}
              title={project.title}
              desc={project.desc}
              imgUrl={project.imgUrl}
              link={project.link}
              linkUrl={project.linkUrl}
              titleModal={project.titleModal}
              descModal={project.descModal}
              cardColor={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
