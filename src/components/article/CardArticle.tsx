import ContentCard from "./ContentCard";

export default function CardArticle() {
  const projects = [
    {
      title: "Refactoring d'Inolib",
      desc: "Description du projet 1.",
      imgUrl:
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "GitHub",
      linkUrl: "https://github.com/inolib/website",
      titleModal: "Refactoring d'Inolib",
      descModal: "Description du projet 1.",
    },
    {
      title: "Création d'InoFormation",
      desc: "Description du projet 2.",
      imgUrl:
        "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "GitHub",
      linkUrl: "https://github.com/y28lyn/inolib-formation",
      titleModal: "Création d'InoFormation",
      descModal: "Description du projet 2.",
    },
    {
      title: "Création d'InoTest",
      desc: "Description du projet 3.",
      imgUrl:
        "https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "GitHub",
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
