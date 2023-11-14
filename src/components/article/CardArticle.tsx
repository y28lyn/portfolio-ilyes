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
      descModal: "Description du projet Inolib.",
      showGithub: true,
      showLink: true,
    },
    {
      title: "Création d'InoFormation",
      desc: "Création d'une plateforme de formation interne sur l'accessibilité numérique. Utilisation de ReactJS, Typescript, TailwindCSS, et GIT. Renforcement de la réputation de l'entreprise.",
      imgUrl: "inoformation.png",
      link: "https://inolib-formation.vercel.app/",
      linkUrl: "https://github.com/y28lyn/inolib-formation",
      titleModal: "Création d'InoFormation",
      descModal: "Description du projet InoFormation.",
      showGithub: true,
      showLink: true,
    },
    {
      title: "Création d'Inotest",
      desc: "Projet majeur sur les tests d'accessibilité numérique et création d'une librairie de composants avec ReactJS, Typescript, TailwindCSS et GIT.",
      imgUrl: "inotest.png",
      link: "https://inotest.vercel.app/",
      linkUrl: "https://github.com/Dindonix/InoTest",
      titleModal: "Création d'InoTest",
      descModal: "Description du projet Inotest.",
      showGithub: true,
      showLink: true,
    },
    {
      title: "Création d'Autoclean",
      desc: "Le site web Autoclean est une vitrine en ligne destinée à présenter l'entreprise et ses services. Il a été développé en utilisant les technologies React.js, TypeScript et Tailwind CSS.",
      imgUrl: "autoclean.png",
      link: "https://autoclean-lyon.fr/",
      linkUrl: "https://github.com/y28lyn/autoclean",
      titleModal: "Création d'Autoclean",
      descModal: "Description du projet Autoclean.",
      showGithub: true,
      showLink: true,
    },
    {
      title: "Continuation d'SGRC",
      desc: "La Table d'Hélène est une application PHP simplifiant la prise de commandes et la gestion des tables, plats, boissons, et menus pour le lycée Hélène Boucher.",
      imgUrl: "sgrc.png",
      link: "https://brodet.fr/SGRC/",
      linkUrl: "https://github.com/y28lyn/sgrc",
      titleModal: "Continuation d'SGRC",
      descModal: "Description du projet SGRC.",
      showGithub: true,
      showLink: true,
    },
    {
      title: "Installation d'un GLPI",
      desc: "GLPI simplifie gestion informatique lycée. Suivi, tickets, inventaires, ressources. Open-source, convivial, productivité. Centralisez, supervisez, améliorez efficacement.",
      imgUrl: "glpi.png",
      link: "https://brodet.fr/SGRC/",
      linkUrl: "https://github.com/y28lyn/sgrc",
      titleModal: "Continuation d'SGRC",
      descModal: "Description du projet SGRC.",
      showGithub: false,
      showLink: false,
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
              showGitHubButton={project.showGithub}
              showLinkButton={project.showLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
