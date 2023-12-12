import ExperienceArticle from "../components/article/ExperienceArticle";
import Banner from "../components/header/Banner";

const Experience = () => {
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
      <main id="main" className="p-10 bg-[#000302]">
        <ExperienceArticle />
      </main>
    </>
  );
};

export default Experience;
