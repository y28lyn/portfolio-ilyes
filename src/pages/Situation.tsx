import CardArticle from "../components/article/CardArticle";
import Banner from "../components/header/Banner";

const Situation = () => {
  return (
    <>
      <header>
        <Banner
          title="Mes situations professionelles"
          subtitle="Explorez mes projets, des initiatives personnelles et professionnelles qui ont façonné mon parcours."
          backgroundImageUrl="https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Mes certifications"
          button1Link="/certification"
          button2Label="Lire plus"
        />
      </header>
      <main id="main">
        <CardArticle />
      </main>
    </>
  );
};

export default Situation;
